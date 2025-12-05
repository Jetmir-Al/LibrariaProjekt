import "./bookPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import NoInfo from "../Components/NoInfo";
import Error from "../Components/Error";
import axios from "axios";

const BookPage = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [toggleSortFilter, setToggleSortFilter] = useState(false);
    const [books, setBooks] = useState([]);

    useEffect(() => {

        const fetchBooks = async () => {

            try {
                const res = await axios.get("https://localhost:7262/api/BookApi/books");
                setBooks(res.data);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
            }
        }
        fetchBooks();

    }, []);


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
                                <label htmlFor="name">Name
                                    <input type="radio" name="sort" id="name"
                                        value="name" />
                                </label>
                                <label htmlFor="price">Price
                                    <input type="radio" name="sort" id="price"
                                        value="price" />
                                </label>
                                <label htmlFor="new">New
                                    <input type="radio" name="sort" id="new"
                                        value="new" />
                                </label>
                                <label htmlFor="old">Old
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

                {
                    isLoading ? <Loading /> : 
                        error ? <Error
                            title="Failed to load the books"
                            details={error}
                        /> :
                    books.length > 0 ? books.map((res, index) => (

                       <Link to={`/bookdetails/${res.id}`}
                            className='new__card bookCard'
                            key={index}>
                            <img
                               src={`https://localhost:7262${res.image}`} alt={res.title}
                               className='new__img' />
                             <div className='bookCardContent'>
                                <h3 className='new__title'>
                                    {res.title}
                                </h3>
                                <p className='author'>
                                    by {res.author}
                                </p>
                                <span className='price'>
                                    {res.price}$
                                </span>
                            </div>
                       </Link>
                    ))
                        : <NoInfo />
                }


            </div>
        </main>
    );
};

export default BookPage;
