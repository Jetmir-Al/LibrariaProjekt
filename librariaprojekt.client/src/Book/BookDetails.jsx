import './bookDetails.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';

import Loading from '../Components/Loading.jsx';
import NoInfo from '../Components/NoInfo.jsx';
import Error from '../Components/Error.jsx';
import axios from 'axios';
import Reviews from './Reviews/Reviews.jsx';
import { AuthContext } from '../Context/AuthContext.jsx';

function BookDetails() {

    const { isLoggedIn, user } = useContext(AuthContext);
    const [addReview, setAddReview] = useState(false);
    const [toggleBuy, setToggleBuy] = useState(false);
    const [toggleBorrow, setToggleBorrow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bookDetails, setBookDetails] = useState(null);
    const [reviews, setReviews] = useState(null);
    const { id } = useParams();
    const [comment, setComment] = useState(null);
    const [rating, setRating] = useState(null);

    const [cardName, setCardName] = useState(null);
    const [cardNumber, setCardNum] = useState(null);
    const [borrowDate, setBorrowDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);

    const [bookQuantity, setBookQuantity] = useState(1);
    
    

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        try {
        //console.log('Submitting review:', { rating, comment });
            await axios.post(
                `https://localhost:7262/api/ReviewApi/create/${id}`, {
                Rating: rating,
                Comment: comment
            }, { withCredentials: true });
            setAddReview(false);
            fetchReviews();
        
        } catch (error) {
            //console.error('Error submitting review:', error);
            setError('Failed to submit review. Please try again later.', error);
        }
    }

    const handleBuySubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://localhost:7262/api/PurchaseApi/create/${id}`, {
                Quantity: bookQuantity,
                CardholderName: cardName,
                CardNumber: cardNumber
            }, { withCredentials: true });
            setToggleBuy(false);
            //console.log(res.data);
        } catch (err) {
            setError('Failed to submit buy form. Please try again', err);
        }

    }

    const handleBorrowSubmit = async (e) => {
        e.preventDefault();
        try {
             await axios.post(`https://localhost:7262/api/BorrowApi/create/${id}`, {
                BorrowDate: borrowDate,
                ReturnDate: returnDate,
                CardholderName: cardName,
                CardNumber: cardNumber
            }, { withCredentials: true });
            setToggleBorrow(false);
            //console.log(res.data);

        } catch (error) {
            setError('Failed to submit borrow. Please try again later.', error);
        }
    } 

    const fetchReviews = async () => {
        try {
            const res = await axios.get(
                `https://localhost:7262/api/ReviewApi/book/${id}`,
                { withCredentials: true });
            if (res.data.length !== 0) {
                setReviews(res.data);
            }
            

        } catch {
            setReviews(null);
        }
    }
    useEffect(() => {
    const fetchBookDetails = async () => {
        try {
            const response = await axios.get(`https://localhost:7262/api/BookApi/books/${id}`);
            setBookDetails(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
        }
    }

        fetchBookDetails();
        fetchReviews();
    }, [id]);
    return (

        <div className="bookDetails-container">

            {
                isLoading ? <Loading />
                    : error ? <Error
                        title="Failed to load book details"
                        details={error}
                    /> : <>
                        <div className="bookDetails">

                            <div className='bookPresentation'>
                                <img className='bookImg'
                                    src={`https://localhost:7262${bookDetails.image}`}
                                    alt={bookDetails.title} />
                                <h2 className='bookTitle'>
                                    {bookDetails.title}
                                </h2>
                            </div>

                            <div className='bookInfo'>
                                <h4><span>Autori:</span> <span>{bookDetails.author}</span></h4>
                                <h4><span>Kategori:</span> <span>{bookDetails.category}</span></h4>
                                <h4><span>Viti:</span> <span>{bookDetails.publishYear}</span></h4>
                                <h4><span>Price:</span> <span>{bookDetails.price}$</span></h4>
                                <h4><span>Sasia:</span> <span>{bookDetails.quantity}</span></h4>


                                    { isLoggedIn &&
                                    <div className='bookBtns'>

                                        <button type='button' id='buy'
                                            onClick={() => {
                                                setToggleBuy(b => !b);
                                                setToggleBorrow(false);
                                            }}
                                        >Buy</button>
                                        <button type='button' id='borrow'
                                            onClick={() => {
                                                setToggleBorrow(b => !b);
                                                setToggleBuy(false);
                                            }}
                                        >Borrow</button>
                                        </div>
                                    
                                }
                            </div>

                            <div className="grid" id="buyContent"
                                style={{ display: toggleBuy ? "flex" : "none" }}>
                                    <form className="login__form grid"
                                        onSubmit={handleBuySubmit}>
                                    <h3 className="login__title">Buy</h3>

                                    <div className="login__group grid">
                                        
                                        <div>
                                            <label className="login__label">Name:</label>
                                                <input type="text" placeholder="Write the card holder's name!" className="login__input" name="cardName" required
                                                    onChange={(e) => setCardName(e.target.value)} />
                                        </div>

                                        <div>
                                            <label className="login__label">Card number:</label>
                                                <input type="number" placeholder="Enter your card number!" className="login__input" name="cardNumber" required
                                                    onChange={(e) => setCardNum(e.target.value)} />
                                        </div>

                                        <div>
                                            <label className="login__label">Password:</label>
                                                <input type="password" placeholder="Enter your card password!" className="login__input" name="cardPsw" required
                                                     />
                                        </div>
                                            <div>
                                                <label className="login__label">Quantity:</label>
                                                <input type="number" min="1" max={bookDetails.quantity} className="login__input" required
                                                    placeholder="Enter number of copies to buy!"
                                                    onChange={(e) => setBookQuantity(e.target.value)} />
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" className="login__button button">Buy</button>
                                    </div>
                                </form>
                                <FontAwesomeIcon icon={faXmark} className="login__close"
                                    onClick={() => setToggleBuy(b => !b)}
                                />
                            </div>

                            <div className="grid" id="borrowContent"
                                style={{ display: toggleBorrow ? "flex" : "none" }}>
                                    <form className="login__form grid"
                                        onSubmit={handleBorrowSubmit}>   
                                        
                                    <h3 className="login__title">Borrow</h3>

                                    <div className="login__group grid">
   
                                        <div>
                                            <label htmlFor="login-email" className="login__label">Name:</label>
                                                <input type="text" placeholder="Write the card holder's name!" className="login__input" name="cardName" required
                                                    onChange={(e) => setCardName(e.target.value)} />
                                        </div>

                                        <div>
                                            <label htmlFor="login-pass" className="login__label">Card number:</label>
                                                <input type="number" placeholder="Enter your card number!" className="login__input" name="cardNumber" required
                                                    onChange={(e) => setCardNum(e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor="login-pass" className="login__label">Password:</label>
                                            <input type="password" placeholder="Enter your card password!" className="login__input" name="cardPsw" required />
                                        </div>
                                        <div>
                                            <label className="login__label">Data e huazimit:</label>
                                                <input type="date" className="login__input" name="data_huazimit" required
                                                    onChange={(e) => setBorrowDate(e.target.value)} />
                                        </div>

                                        <div>
                                            <label className="login__label">Data e kthimit:</label>
                                                <input type="date" className="login__input" name="data_kthimit" required
                                                    onChange={(e) => setReturnDate(e.target.value)} />
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" className="login__button button">Borrow</button>
                                    </div>
                                </form>
                                <FontAwesomeIcon icon={faXmark} className="login__close"
                                    onClick={() => setToggleBorrow(b => !b)}
                                />
                            </div>
                        </div>


                        <div className="bookReviews-container">
                                <h2 className="testimonial__title">Reviews</h2>
                                <div className="bookReviews">

                                {
                                    reviews === null  ? 
                                        <NoInfo /> :
                                        reviews.map((rev, index) => (
                                            <Reviews key={index}
                                                name={rev.name}
                                                comment={rev.comment}
                                                stars={rev.rating}
                                            />
                                        ))
                                    }
                                </div>
                            {
                                    isLoggedIn &&
                                <>

                                    <button id="addReview" className="addReview" type="button"
                                        style={{ display: addReview ? 'none' : 'block' }}
                                        onClick={() => setAddReview(r => !r)}>ADD YOUR REVIEW</button>

                                        <form className="bookReview-form" id="bookReview-form"
                                            style={{ display: addReview ? 'flex' : 'none' }}
                                            onSubmit={handleReviewSubmit}>
                                        <div className="bookReview-inputs">
                                            <h2 className="testimonial__title">
                                                    {user.name}
                                            </h2>

                                            <label htmlFor="comment">
                                                Comment: <br />
                                                <textarea name="comment" id="comment"
                                                        cols="28" rows="5" required
                                                        onChange={(e) => setComment(e.target.value)}
                                                    ></textarea>
                                            </label>
                                                <div className="starRating">
                                                    {[...Array(5)].map((_, index) => {
                                                        const starValue = index + 1;

                                                        return (
                                                            <FontAwesomeIcon
                                                                key={index}
                                                                icon={faStar}
                                                                className={
                                                                    starValue <= (rating) ? "star filled" : "star"
                                                                }
                                                                onClick={() => setRating(starValue)}
                                                                onMouseEnter={() => setRating(starValue)}
                                                            />
                                                        );
                                                    })}
                                                </div>

                                            <div className="bookReviewBtns">
                                                <button type="submit">Submit</button>
                                                <button type="button" id="cancelReview"
                                                    onClick={() => setAddReview(r => !r)}>Cancel</button>
                                            </div>
                                        </div>
                                    </form>
                                </>
                            }
                        </div>

                    </>
            }
        </div>
    );

};

export default BookDetails;