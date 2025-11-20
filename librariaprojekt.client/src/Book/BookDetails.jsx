import './bookDetails.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import StarRating from 'star-rating.js';
import 'star-rating.js/dist/star-rating.css';

import Reviews from './Reviews/Reviews.jsx';

function BookDetails() {

    const [addReview, setAddReview] = useState(false);
    const [toggleBuy, setToggleBuy] = useState(false);
    const [toggleBorrow, setToggleBorrow] = useState(false);

    useEffect(() => {
        //const rating
        new StarRating('.star-rating', {
            maxStars: 5,
            starSize: 25
        });
    }, []);

    return (

        <div className="bookDetails-container">

            <div className="bookDetails">
                {/*        include_once('./book/bookDetailsFunc.php');*/}


                <div className='bookPresentation'>
                    <img className='bookImg' src='src/assets/imgs/book-7.png' alt='img' />
                    <h2 className='bookTitle'></h2>
                </div>
                <div className='bookInfo'>
                    <h4><span>Autori:</span> <span></span></h4>
                    <h4><span>Kategori:</span> <span></span></h4>
                    <h4><span>Price:</span> <span></span></h4>
                    <h4><span>Sasia:</span> <span></span></h4>

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
                </div>

                <div className="grid" id="buyContent"
                    style={{ display: toggleBuy ? "flex" : "none" }}>
                    <form className="login__form grid">
                        <h3 className="login__title">Buy</h3>

                        <div className="login__group grid">
                            <div>
                                <input type="hidden" name="libriID" value="" />
                                <input type="hidden" name="userID" value="" />
                                <input type="hidden" name="price" value="" />

                            </div>
                            <div>
                                <label htmlFor="login-email" className="login__label">Name:</label>
                                <input type="text" placeholder="Write the card holder's name!" className="login__input" name="cardName" required />
                            </div>

                            <div>
                                <label htmlFor="login-pass" className="login__label">Card number:</label>
                                <input type="number" placeholder="Enter your card number!" className="login__input" name="cardNumber" required />
                            </div>

                            <div>
                                <label htmlFor="login-pass" className="login__label">Password:</label>
                                <input type="password" placeholder="Enter your card password!" className="login__input" name="cardPsw" required />
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
                    <form className="login__form grid" >
                        <h3 className="login__title">Borrow</h3>

                        <div className="login__group grid">
                            <div>
                                <input type="hidden" name="libriID" value="" />
                                <input type="hidden" name="userID" value="" />
                                <input type="hidden" name="price" value="" />

                            </div>
                            <div>
                                <label htmlFor="login-email" className="login__label">Name:</label>
                                <input type="text" placeholder="Write the card holder's name!" className="login__input" name="cardName" required />
                            </div>

                            <div>
                                <label htmlFor="login-pass" className="login__label">Card number:</label>
                                <input type="number" placeholder="Enter your card number!" className="login__input" name="cardNumber" required />
                            </div>
                            <div>
                                <label htmlFor="login-pass" className="login__label">Password:</label>
                                <input type="password" placeholder="Enter your card password!" className="login__input" name="cardPsw" required />
                            </div>
                            <div>
                                <label className="login__label">Data e huazimit:</label>
                                <input type="date" className="login__input" name="data_huazimit" required />
                            </div>

                            <div>
                                <label className="login__label">Data e kthimit:</label>
                                <input type="date" className="login__input" name="data_kthimit" required />
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

                <Reviews />
                
                <button id="addReview" className="addReview" type="button"
                    style={{ display: addReview ? 'none' : 'block' }}
                    onClick={() => setAddReview(r => !r)}>ADD YOUR REVIEW</button>

                <form className="bookReview-form" id="bookReview-form"
                    style={{ display: addReview ? 'flex' : 'none' }}>
                    <div className="bookReview-inputs">
                        <h2 className="testimonial__title">
                            Emri i personit
                        </h2>
                        <input type="hidden" name="libriID" value="" />
                        <input type="hidden" name="userID" value="" />

                        <label htmlFor="comment">
                            Comment: <br />
                            <textarea name="comment" id="comment"
                                cols="28" rows="5" required></textarea>
                        </label>
                        <select className="star-rating" name="rating" required>
                            <option value="">Select a rating</option>
                            <option value="5">Excellent</option>
                            <option value="4">Very Good</option>
                            <option value="3">Average</option>
                            <option value="2">Poor</option>
                            <option value="1">Terrible</option>
                        </select>
                        <div className="bookReviewBtns">
                            <button type="submit">Submit</button>
                            <button type="button" id="cancelReview"
                                onClick={() => setAddReview(r => !r)}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );

};

export default BookDetails;