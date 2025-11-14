
import './BodyStyles/featured.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Featured() {
    return (
        <section className="featured section"
            id="featured">
            <h2 className="section__title">
                Featured Books
            </h2>


            <div className="featured__container">
                <div className="featured__swiper swiper">
                    <div className="swiperFeatured">

                        <article className="featured__card swiper-slide ">
                            <img src="src/assets/imgs/book-1.png" alt="image"
                                className="featured__img" />


                            <h2 className="featured__title">title</h2>
                            <div className="featured__prices">
                                <span className="featured__prices">price</span>
                            </div>

                            <button className="button">Get Now!</button>

                        </article>

                        <article className="featured__card swiper-slide ">
                            <img src="src/assets/imgs/book-1.png" alt="image"
                                className="featured__img" />


                            <h2 className="featured__title">title</h2>
                            <div className="featured__prices">
                                <span className="featured__prices">price</span>
                            </div>

                            <button className="button">Get Now!</button>

                        </article>

                        <article className="featured__card swiper-slide ">
                            <img src="src/assets/imgs/book-1.png" alt="image"
                                className="featured__img" />


                            <h2 className="featured__title">title</h2>
                            <div className="featured__prices">
                                <span className="featured__prices">price</span>
                            </div>

                            <button className="button">Get Now!</button>

                        </article>
                    </div>
                    <div className="swiper-buttons">
                        <div className="swiper-button-next">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                        <div className="swiper-button-prev">
                             <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}

export default Featured;