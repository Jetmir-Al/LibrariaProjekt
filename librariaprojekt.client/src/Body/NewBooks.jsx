import './BodyStyles/new.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function NewBooks() {

    const [newBooks, setNewBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const fetchNewBooks = async () => {
            try {

                const res = await axios.get("https://localhost:7262/api/BookApi/latest");
                if (res.data.length > 0) {
                    setNewBooks(res.data);
                }
            } catch (err) {
                console.error("Diqka shkoj keq, ", err);
            }

        };
        fetchNewBooks();

    }, []);

    return (
        <section className="new section" id="new">
            <h2 className="section__title">
                New Books
            </h2>

            <div className="new__container container">
                <div className="new__swiper swiper">
                    <div className="swiperNew">
                        {
                            newBooks.map((book, index) => (

                                <div className="new__card swiper-slide" key={index}
                                    onClick={() => navigate(`/bookdetails/${book.id}`)}>
                                    <img
                                        src={`https://localhost:7262${book.image}`}
                                        alt="image"
                                    className="new__img" />
                                
                                <div>
                                        <h2
                                            className="new__title">{book.title}</h2>
                                        <div
                                            className="new__prices">
                                            <span
                                                className="new__discount">
                                                {book.price}$
                                            </span>
                                        </div>

                                        <div
                                            className="new__discount">
                                            {book.category}
                                     
                                        </div>
                                </div>
                            </div>
                            ))

                        }


                    </div>
                </div>
            </div>
        </section>

   
    );
}
export default NewBooks;