import "./bookPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../Components/Loading";
import NoInfo from "../Components/NoInfo";
import Error from "../Components/Error";
import axios from "axios";

const BookPage = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [toggleSortFilter, setToggleSortFilter] = useState(false);

    const [sortValue, setSortValue] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [books, setBooks] = useState([]);
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
        console.log(searchInput, selectedCategories, sortValue);
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

        const fetchBooks = async () => {

            try {
                const res = await axios.get("https://localhost:7262/api/BookApi/advanced", {
                    params: {
                        page,
                        pageSize,
                        ...(search && { search }),
                        ...(sort && { sort }),
                        ...(categories.length > 0 && { categories })
                    }
                });
                setBooks(res.data.data);
                setCurrentPage(res.data.page);
                setTotalPages(res.data.totalPages);
                setIsLoading(false);
                console.log("render")
            } catch (err) {
                setError(err.message);
            }
        }
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

                                <label><input type="checkbox" name="letersi" id="letersi"
                                    value="Letersi"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                /> Letersi</label>
                                <label><input type="checkbox" name="biografi" id="biografi"
                                    value="Biografi"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                /> Biografi</label>
                                <label><input type="checkbox" name="histori" id="histori"
                                    value="Histori"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                /> Histori</label>
                                <label><input type="checkbox" name="politik" id="politik"
                                    value="Politik"
                                onChange={(e) => setSelectedCategories(
                                    selected => selected.includes(e.target.value) ?
                                        selected.filter(s => s !== e.target.value) :
                                        [...selected, e.target.value]
                                )}
                                /> Politik</label>
                                <label><input type="checkbox" name="ese" id="ese"
                                    value="Ese"
                                onChange={(e) => setSelectedCategories(
                                    selected => selected.includes(e.target.value) ?
                                        selected.filter(s => s !== e.target.value) :
                                        [...selected, e.target.value]
                                )}
                                /> Ese</label>
                                <label><input type="checkbox" name="filozofi" id="filozofi"
                                    value="Filozofi"
                                onChange={(e) => setSelectedCategories(
                                    selected => selected.includes(e.target.value) ?
                                        selected.filter(s => s !== e.target.value) :
                                        [...selected, e.target.value]
                                )}
                                /> Filozofi</label>
                                <label><input type="checkbox" name="tregimeTeShkurta" id="tregimeTeShkurta"
                                    value="TregimeTeShkurta"
                                onChange={(e) => setSelectedCategories(
                                    selected => selected.includes(e.target.value) ?
                                        selected.filter(s => s !== e.target.value) :
                                        [...selected, e.target.value]
                                )}
                                /> Tregime te shkurta</label>
                                <label>
                                    <input type="checkbox" name="roman" id="roman"
                                        value="Roman"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                    /> Roman
                                </label>
                                <label>
                                    <input type="checkbox" name="romance" id="romance"
                                        value="Romance"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                    /> Romance
                                </label>
                                <label>
                                    <input type="checkbox" name="ekonomi" id="ekonomi"
                                        value="Ekonomi"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                    /> Ekonomi
                                </label>
                                <label>
                                    <input type="checkbox" name="triller" id="triller"
                                        value="Triller"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                    /> Triller
                                </label>
                                <label>
                                    <input type="checkbox" name="biznes" id="biznes"
                                        value="Biznes"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                    /> Biznes
                                </label>
                                <label>
                                    <input type="checkbox" name="psikologji" id="psikologji"
                                        value="Psikologji"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                    /> Psikologji
                                </label>
                                <label>
                                    <input type="checkbox" name="motivim" id="motivim"
                                        value="Motivim"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                    /> Motivim
                                </label>
                                <label>
                                    <input type="checkbox" name="zhvillimPersonal" id="zhvillimPersonal"
                                        value="ZhvillimPersonal"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                    /> Zhvillim personal
                                </label>
                                <label>
                                    <input type="checkbox" name="sociologji" id="sociologji"
                                        value="Sociologji"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                    /> Sociologji
                                </label>
                                <label>
                                    <input type="checkbox" name="poezi" id="poezi"
                                        value="Poezi"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                    /> Poezi
                                </label>
                                <label>
                                    <input type="checkbox" name="tregime" id="tregime"
                                        value="Tregime"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                    /> Tregime
                                </label>
                                <label>
                                    <input type="checkbox" name="perralla" id="perralla"
                                        value="Perralla"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                    /> Perralla
                                </label>
                                <label>
                                    <input type="checkbox" name="pedagogji" id="pedagogji"
                                        value="Pedagogji"
                                    onChange={(e) => setSelectedCategories(
                                        selected => selected.includes(e.target.value) ?
                                            selected.filter(s => s !== e.target.value) :
                                            [...selected, e.target.value]
                                    )}
                                    /> Pedagogji
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
