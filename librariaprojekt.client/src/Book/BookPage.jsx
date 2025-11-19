import "./bookPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react"; 

const BookPage = () => {

    const [toggleSortFilter, setToggleSortFilter] = useState(false);

    return (

        <main className="main">

            <div className="bookSearch-container">
                <form className="bookSearch-form">
                    <FontAwesomeIcon
                        className="search__icon"
                        icon={faMagnifyingGlass} />
                    <input type="text" placeholder="What are you looking?"
                        className="search-input" name="search"
                        value="" />
                </form>

                <div className="sortFilter-Container">
                    <button className="sortFilter-btn" id="sortFiler-toggle"
                        onClick={() => setToggleSortFilter(s => !s)}>
                        <FontAwesomeIcon className="sortFilter-icon"
                            icon={faEllipsisVertical} />
                    </button>
                    <div className="sortFilter"
                        id="sortFilter-field"
                        style={{ display: toggleSortFilter ? 'flex' : 'none' }}
                    >
                        <form className="sortForm">
                            <h4>Sort by: </h4>
                            <div className="sortForm-inputs">
                                <label for="name">Name
                                    <input type="radio" name="sort" id="name"
                                        value="name" />
                                </label>
                                <label for="price">Price
                                    <input type="radio" name="sort" id="price"
                                        value="price" />
                                </label>
                                <label for="new">New
                                    <input type="radio" name="sort" id="new"
                                        value="new" />
                                </label>
                                <label for="old">Old
                                    <input type="radio" name="sort" id="old"
                                        value="old" />
                                </label>
                            </div>

                            <h4>Filter by:</h4>
                            <div className="filterForm">

                                <label><input type="checkbox" name="letersi" id="letersi"
                                    value="letersi" /> Letersi</label>
                                <label><input type="checkbox" name="biografi" id="biografi"
                                    value="biografi" /> Biografi</label>
                                <label><input type="checkbox" name="histori" id="histori"
                                    value="histori" /> Histori</label>
                                <label><input type="checkbox" name="politik" id="politik"
                                    value="plotik" /> Politik</label>
                                <label><input type="checkbox" name="ese" id="ese"
                                    value="ese" /> Ese</label>
                                <label><input type="checkbox" name="filozofi" id="filozofi"
                                    value="filozofi" /> Filozofi</label>
                                <label><input type="checkbox" name="tregimeTeShkurta" id="tregimeTeShkurta"
                                    value="tregimeTeShkurta" /> Tregime te shkurta</label>
                                <label>
                                    <input type="checkbox" name="roman" id="roman"
                                        value="roman" /> Roman
                                </label>
                                <label>
                                    <input type="checkbox" name="romance" id="romance"
                                        value="romance" /> Romance
                                </label>
                                <label>
                                    <input type="checkbox" name="ekonomi" id="ekonomi"
                                        value="ekonomi" /> Ekonomi
                                </label>
                                <label>
                                    <input type="checkbox" name="triller" id="triller"
                                        value="triller" /> Triller
                                </label>
                                <label>
                                    <input type="checkbox" name="biznes" id="biznes"
                                        value="biznes" /> Biznes
                                </label>
                                <label>
                                    <input type="checkbox" name="psikologji" id="psikologji"
                                        value="psikologji" /> Psikologji
                                </label>
                                <label>
                                    <input type="checkbox" name="motivim" id="motivim"
                                        value="motivim" /> Motivim
                                </label>
                                <label>
                                    <input type="checkbox" name="zhvillimPersonal" id="zhvillimPersonal"
                                        value="zhvillimPersonal" /> Zhvillim personal
                                </label>
                                <label>
                                    <input type="checkbox" name="sociologji" id="sociologji"
                                        value="sociologji" /> Sociologji
                                </label>
                                <label>
                                    <input type="checkbox" name="poezi" id="poezi"
                                        value="poezi" /> Poezi
                                </label>
                                <label>
                                    <input type="checkbox" name="tregime" id="tregime"
                                        value="tregime" /> Tregime
                                </label>
                                <label>
                                    <input type="checkbox" name="perralla" id="perralla"
                                        value="perralla" /> Perralla
                                </label>
                                <label>
                                    <input type="checkbox" name="pedagogji" id="pedagogji"
                                        value="pedagogji" /> Pedagogji
                                </label>


                            </div>

                            <div className="sortFilter-btns">
                                <button type="submit">Submit</button>
                                <button id="closeSortFilter" type="button"
                                    onClick={() => setToggleSortFilter(false)} 
                                >Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="bookDisplay-container">

                <Link to="/bookdetails" className='new__card bookCard'>
                    <img src="src/assets/imgs/book-10.png" alt='image'
                        className='new__img' />
                    <div className='bookCardContent'>
                        <h3 className='new__title'>titull</h3>
                        <p className='author'>by autor</p>
                        <span className='price'>qmimi</span>
                    </div>
                </Link>

                <Link to="/bookdetails" className='new__card bookCard'>
                    <img src="src/assets/imgs/book-10.png" alt='image'
                        className='new__img' />
                    <div className='bookCardContent'>
                        <h3 className='new__title'>titull</h3>
                        <p className='author'>by autor</p>
                        <span className='price'>qmimi</span>
                    </div>
                </Link>

                <Link to="/bookdetails" className='new__card bookCard'>
                    <img src="src/assets/imgs/book-10.png" alt='image'
                        className='new__img' />
                    <div className='bookCardContent'>
                        <h3 className='new__title'>titull</h3>
                        <p className='author'>by autor</p>
                        <span className='price'>qmimi</span>
                    </div>
                </Link>

                <Link to="/bookdetails" className='new__card bookCard'>
                    <img src="src/assets/imgs/book-10.png" alt='image'
                        className='new__img' />
                    <div className='bookCardContent'>
                        <h3 className='new__title'>titull</h3>
                        <p className='author'>by autor</p>
                        <span className='price'>qmimi</span>
                    </div>
                </Link>

                <Link to="/bookdetails" className='new__card bookCard'>
                    <img src="src/assets/imgs/book-10.png" alt='image'
                        className='new__img' />
                    <div className='bookCardContent'>
                        <h3 className='new__title'>titull</h3>
                        <p className='author'>by autor</p>
                        <span className='price'>qmimi</span>
                    </div>
                </Link>


            </div>
        </main>
    );
};

export default BookPage;


//import React, { useEffect, useState } from 'react';
//import { useParams, Link } from 'react-router-dom';

//const BookPage = () => {
//    const { id } = useParams();
//    const [book, setBook] = useState(null);
//    const [loading, setLoading] = useState(true);
//    const [error, setError] = useState(null);
//    const [reviewText, setReviewText] = useState('');
//    const [submitting, setSubmitting] = useState(false);

//    useEffect(() => {
//        let mounted = true;
//        const fetchBook = async () => {
//            setLoading(true);
//            setError(null);
//            try {
//                const res = await fetch(`/api/books/${encodeURIComponent(id)}`);
//                if (!res.ok) throw new Error(`Failed to load book (${res.status})`);
//                const data = await res.json();
//                if (mounted) setBook(data);
//            } catch (err) {
//                if (mounted) setError(err.message || 'Unknown error');
//            } finally {
//                if (mounted) setLoading(false);
//            }
//        };

//        fetchBook();
//        return () => {
//            mounted = false;
//        };
//    }, [id]);

//    const handleSubmitReview = async (e) => {
//        e.preventDefault();
//        if (!reviewText.trim()) return;
//        setSubmitting(true);
//        try {
//            const res = await fetch(`/api/books/${encodeURIComponent(id)}/reviews`, {
//                method: 'POST',
//                headers: { 'Content-Type': 'application/json' },
//                body: JSON.stringify({ text: reviewText.trim() }),
//            });
//            if (!res.ok) throw new Error(`Failed to submit review (${res.status})`);
//            const newReview = await res.json();
//            setBook((b) => ({
//                ...b,
//                reviews: b.reviews ? [newReview, ...b.reviews] : [newReview],
//            }));
//            setReviewText('');
//        } catch (err) {
//            // keep error simple for the UI
//            setError(err.message || 'Failed to submit review');
//        } finally {
//            setSubmitting(false);
//        }
//    };

//    if (loading) return <div className="book-page">Loading book...</div>;
//    if (error) return (
//        <div className="book-page">
//            <p className="error">Error: {error}</p>
//            <p><Link to="/books">Back to list</Link></p>
//        </div>
//    );
//    if (!book) return <div className="book-page">Book not found.</div>;

//    return (
//        <div className="book-page">
//            <header className="book-header">
//                <h1>{book.title}</h1>
//                {book.author && <p className="book-author">by {book.author}</p>}
//            </header>

//            <section className="book-details">
//                {book.coverUrl && (
//                    <div className="book-cover">
//                        <img src={book.coverUrl} alt={`Cover of ${book.title}`} />
//                    </div>
//                )}
//                <div className="book-meta">
//                    {book.genre && <p><strong>Genre:</strong> {book.genre}</p>}
//                    {book.publishedYear && <p><strong>Published:</strong> {book.publishedYear}</p>}
//                    {book.description && <p className="book-description">{book.description}</p>}
//                </div>
//            </section>

//            <section className="book-reviews">
//                <h2>Reviews</h2>
//                <form onSubmit={handleSubmitReview} className="review-form">
//                    <textarea
//                        value={reviewText}
//                        onChange={(e) => setReviewText(e.target.value)}
//                        placeholder="Write a short review..."
//                        rows={4}
//                        disabled={submitting}
//                    />
//                    <div>
//                        <button type="submit" disabled={submitting || !reviewText.trim()}>
//                            {submitting ? 'Submitting...' : 'Add Review'}
//                        </button>
//                    </div>
//                </form>

//                {book.reviews && book.reviews.length > 0 ? (
//                    <ul className="reviews-list">
//                        {book.reviews.map((r) => (
//                            <li key={r.id || r._id || r.createdAt}>
//                                <div className="review-meta">
//                                    <span className="review-author">{r.author || 'Anonymous'}</span>
//                                    {r.createdAt && <span className="review-date"> — {new Date(r.createdAt).toLocaleString()}</span>}
//                                </div>
//                                <p className="review-text">{r.text}</p>
//                            </li>
//                        ))}
//                    </ul>
//                ) : (
//                    <p>No reviews yet.</p>
//                )}
//            </section>

//            <p><Link to="/books">Back to list</Link></p>
//        </div>