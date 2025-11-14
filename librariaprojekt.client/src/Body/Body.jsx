import './BodyStyles/body.css';
import { Link } from 'react-router-dom'; 

function Body() {

    return (
        <main className="main">
            <section className="home section" id="home">
                <div className="home__container grid">
                    <div className="home__data">
                        <h1 className="home__title">
                            Browse & <br/>
                                Select E-Books
                        </h1>

                        <p className="home__description">
                            Find the best e-books from your favorite writers
                            explore hundreds of books with all possible categories
                            take advantage of the 50% discount and much more.
                        </p>

                        <Link to="/bookpage"
                            className="button">
                            Explore Now
                        </Link>
                    </div>

                    <div className="home__images">
                        <div className="home__swiper swiper">
                            <div className="swiper-wrapper">

                                <article className="home__article swiper-slide">
                                    <img src="src/assets/imgs/home-book-1.png" alt="image" className="home__img" />
                                </article>

                                <article className="home__article swiper-slide">
                                    <img src="src/assets/imgs/home-book-2.png" alt="image" className="home__img"/>
                                </article>

                                <article className="home__article swiper-slide">
                                    <img src="src/assets/imgs/home-book-3.png" alt="image" className="home__img" />
                                </article>

                                <article className="home__article swiper-slide">
                                    <img src="src/assets/imgs/home-book-4.png" alt="image" className="home__img"/>
                                </article>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Body;