import './BodyStyles/new.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function NewBooks() {
    return (
        <section className="new section" id="new">
            <h2 className="section__title">
                New Books
            </h2>

            <div className="new__container container">
                <div className="new__swiper swiper">
                    <div className="swiperNew">

                        <a href="#" className="new__card swiper-slide">
                            <img src="src/assets/imgs/book-2.png" alt="image"
                                className="new__img" />
                                
                                <div>
                                    <h2 className="new__title">title</h2>
                                    <div className="new__prices">
                                        <span className="new__discount">cmimi</span>
                                    </div>

                                    <div className="new__stars">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                        </a>

                        <a href="#" className="new__card swiper-slide">
                            <img src="src/assets/imgs/book-2.png" alt="image"
                                className="new__img" />

                            <div>
                                <h2 className="new__title">title</h2>
                                <div className="new__prices">
                                    <span className="new__discount">cmimi</span>
                                </div>

                                <div className="new__stars">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </a>
                        <a href="#" className="new__card swiper-slide">
                            <img src="src/assets/imgs/book-2.png" alt="image"
                                className="new__img" />

                            <div>
                                <h2 className="new__title">title</h2>
                                <div className="new__prices">
                                    <span className="new__discount">cmimi</span>
                                </div>

                                <div className="new__stars">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </a>



                    </div>
                </div>
            </div>
        </section>

   
    );
}
export default NewBooks;