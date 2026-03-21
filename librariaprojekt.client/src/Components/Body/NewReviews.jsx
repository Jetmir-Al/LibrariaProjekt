import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function NewReviews() {
    return (
        <section className="testimonial section" id="testimonial">
            <h2 className="section__title">
                Customer Opinions
            </h2>
            <div className="testimonial__container">
                <div className="testimonial__swiper swiper">
                    <div className="swiper-wrapper testimonial-container">
                        <article className="testimonial__card swiper-slide">

                            <h2 className="testimonial__title">Dion</h2>
                            <p className="testimonial__description">
                                "I absolutely love this book website! The selection is
                                fantastic, and I always find something new and exciting
                                to read. </p>

                            <div className="testimonial__stars">
                                <FontAwesomeIcon icon={faStar} className="starIcons" />
                                <FontAwesomeIcon icon={faStar} className="starIcons" />
                                <FontAwesomeIcon icon={faStar} className="starIcons" />
                                <FontAwesomeIcon icon={faStar} className="starIcons" />
                                <FontAwesomeIcon icon={faStar} className="starIcons" />

                            </div>
                        </article>
                        <article className="testimonial__card swiper-slide">

                            <h2 className="testimonial__title">Skifter</h2>
                            <p className="testimonial__description">
                                "This website makes finding books so easy! I always discover
                                interesting reads, and the variety keeps me coming back." </p>

                            <div className="testimonial__stars">
                                <FontAwesomeIcon icon={faStar} className="starIcons" />
                                <FontAwesomeIcon icon={faStar} className="starIcons" />
                                <FontAwesomeIcon icon={faStar} className="starIcons" />
                                <FontAwesomeIcon icon={faStar} className="starIcons" />
                                <FontAwesomeIcon icon={faStar} className="starIcons" />

                            </div>
                        </article>
                        <article className="testimonial__card swiper-slide">

                            <h2 className="testimonial__title">Perparim Rama</h2>
                            <p className="testimonial__description">
                                "I really enjoy using this book platform!
                                The collection is amazing, and I always find
                                something new to dive into." </p>

                            <div className="testimonial__stars">
                                <FontAwesomeIcon icon={faStar} className="starIcons" />
                                <FontAwesomeIcon icon={faStar} className="starIcons" />
                                <FontAwesomeIcon icon={faStar} className="starIcons" />
                                <FontAwesomeIcon icon={faStar} className="starIcons" />
                                <FontAwesomeIcon icon={faStar} className="starIcons" />

                            </div>
                        </article>
                       
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewReviews;