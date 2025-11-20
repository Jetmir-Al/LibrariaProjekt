
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

                        <article className="featured__card swiper-slide item item5">
                            <img src="src/assets/imgs/book-1.png" alt="image"
                                className="featured__img" />


                            <h2 className="featured__title">title</h2>
                            <div className="featured__prices">
                                <span className="featured__prices">price</span>
                            </div>

                            <button className="button">Get Now!</button>

                        </article>

                        <article className="featured__card swiper-slide item item1">
                            <img src="src/assets/imgs/book-1.png" alt="image"
                                className="featured__img" />


                            <h2 className="featured__title">title</h2>
                            <div className="featured__prices">
                                <span className="featured__prices">price</span>
                            </div>

                            <button className="button">Get Now!</button>

                        </article>

                        <article className="featured__card swiper-slide item item2">
                            <img src="src/assets/imgs/book-1.png" alt="image"
                                className="featured__img" />


                            <h2 className="featured__title">title</h2>
                            <div className="featured__prices">
                                <span className="featured__prices">price</span>
                            </div>

                            <button className="button">Get Now!</button>

                        </article>
                        <article className="featured__card swiper-slide item item3">
                            <img src="src/assets/imgs/book-1.png" alt="image"
                                className="featured__img" />


                            <h2 className="featured__title">title</h2>
                            <div className="featured__prices">
                                <span className="featured__prices">price</span>
                            </div>

                            <button className="button">Get Now!</button>

                        </article>
                        <article className="featured__card swiper-slide item item4">
                            <img src="src/assets/imgs/book-1.png" alt="image"
                                className="featured__img" />


                            <h2 className="featured__title">title</h2>
                            <div className="featured__prices">
                                <span className="featured__prices">price</span>
                            </div>

                            <button className="button">Get Now!</button>

                        </article>
                    </div>
               
                </div>
            </div>
        </section>

    );

}

export default Featured;