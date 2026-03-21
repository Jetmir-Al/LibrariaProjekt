import "./bookPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../utils/Loading";
import NoInfo from "../utils/NoInfo";
import Error from "../utils/Error";
import { getImageUrl, getBooksAdvanced, getBookCategories } from "../api/bookApi";

const BookPage = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [toggleSortFilter, setToggleSortFilter] = useState(false);

    const [sortValue, setSortValue] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [books, setBooks] = useState([]);
    const [bookCategories, setBookCategories] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const [params, setParams] = useSearchParams();
    const page = params.get("page") || 1;
    const pageSize = params.get("pageSize") || 20;
    const search = params.get("search") || null;
    const categoriesArray = params.getAll("categories");
    const categories = categoriesArray.join(",");
    const sort = params.get("sort") || null;

    const handleSearch = (e) => {
        e.preventDefault();
        setParams(s => ({
            ...s,
            search: searchInput,
            page: 1,
            sort: sortValue,
            categories: selectedCategories
        }))
    }

    const handleSortFilter = (e) => {
        e.preventDefault();
        setParams(s => ({
            ...s,
            search: searchInput,
            page: 1,
            categories: selectedCategories,
            sort: sortValue
        }));
        setToggleSortFilter(false);
    }

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await getBookCategories();
                setBookCategories(res);
            } catch {
                // Handle error if needed
            }
        }
        const fetchBooks = async () => {

            try {
                const res = await getBooksAdvanced(
                    {
                        params: {
                            page: page,
                            pageSize: pageSize,
                            ...(search && { search }),
                            ...(categories.length > 0 && { categories }),
                            ...(sort && { sort })
                        }
                    }
                );
                setBooks(res.data);
                setCurrentPage(res.page);
                setTotalPages(res.totalPages);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
            }
        }
        fetchCategories();
        fetchBooks();

    }, [page, search, sort, categories]);


    return (

        <main className="main">

            <div className="bookSearch-container">
                <form className="bookSearch-form" onSubmit={handleSearch}>
                    <FontAwesomeIcon
                        className="search__icon"
                        icon={faMagnifyingGlass} />
                    <input type="text" placeholder="What are you looking?"
                        className="search-input" name="search"
                        onChange={(e) => setSearchInput(e.target.value)}
                        />
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
                        <form
                            className="sortForm"
                            onSubmit={handleSortFilter}
                        >
                            <h4>Sort by: </h4>
                            <div className="sortForm-inputs">
                                <label htmlFor="name">Name
                                    <input type="radio" name="sort" id="name"
                                        value="name"
                                        onChange={(e) => setSortValue(e.target.value)} />
                                </label>
                                <label htmlFor="price">Price
                                    <input type="radio" name="sort" id="price"
                                        value="price"
                                    onChange={(e) => setSortValue(e.target.value)}                                    />
                                </label>
                                <label htmlFor="new">New
                                    <input type="radio" name="sort" id="new"
                                        value="new"
                                    onChange={(e) => setSortValue(e.target.value)}                                    />
                                </label>
                                <label htmlFor="old">Old
                                    <input type="radio" name="sort" id="old"
                                        value="old"
                                    onChange={(e) => setSortValue(e.target.value)}                                    />
                                </label>
                            </div>

                            <h4>Filter by:</h4>
                            <div className="filterForm">
                                {
                                    bookCategories.map((res, index) => (
                                        <label key={index}>
                                            <input type="checkbox" name={res.categories} id={res.categories}
                                                value={res.categories}
                                                onChange={(e) => setSelectedCategories(
                                                    selected => selected.includes(e.target.value) ?
                                                        selected.filter(s => s !== e.target.value) :
                                                        [...selected, e.target.value]
                                                )}
                                            /> {res.categories}
                                        </label>  
                                    ))
                                }                                                                
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
                                src={getImageUrl(res.image)} alt={res.title}
                               className='new__img' />
                             <div className='bookCardContent'>
                                <h3 className='new__title'>
                                    {res.title}
                                </h3>
                                <p className='author'>
                                    by {res.author}
                                </p>
                                <span className='price'>
                                    {res.category}
                                </span>
                                <span className='price'>
                                    {res.price}$
                                </span>
                            </div>
                       </Link>
                    ))
                        : <NoInfo />
                }

            </div>
                <div className="pageNumbers-container">
                {
                    Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`pageLink  ${currentPage == index + 1 ? "active" : ""}`}
                            onClick={() => setParams({
                                page: index + 1,
                                pageSize,
                                ...(search && { search }),
                                ...(sort && { sort }),
                                ...(categories.length > 0 && { categories })
                            })}
                        >
                            {index + 1}
                        </button>
                    ))
                }
                </div>
        </main>
    );
};

export default BookPage;
