import './BodyStyles/featured.css';
import Loading from "../../utils/Loading";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFeaturedBooks, getImageUrl } from "../../api/bookApi";

function Featured() {

    const [featured, setFeatured] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchFeautred = async () => {
            try {

                const response = await getFeaturedBooks();
                if (response.length > 0) {
                    setFeatured(response);
                }
                setLoading(false);
            } catch (err) {
                console.error("Diqka shkoj keq, ", err);
            }

        };
        fetchFeautred();
    }, []);

    return (
        <section className="featured section"
            id="featured">
            <h2 className="section__title">
                Featured Books
            </h2>


            <div className="featured__container">
                <div className="featured__swiper swiper">
                    <div className="swiperFeatured">

                        {
                            loading ? <Loading/> :
                            featured.map((f, index) => (
                                <article className={`featured__card swiper-slide item item${index}`}
                                        key={f.id}>
                                    <img
                                        src={getImageUrl(f.image)}
                                            alt="image"
                                            className="featured__img" />


                                        <h2 className="featured__title">{f.title}</h2>
                                        <div className="featured__prices">
                                        <span className="featured__price">{f.category}</span>
                                        <span className="featured__price">{f.price}$</span>
                                        </div>

                                    <button className="button"
                                        onClick={() => navigate(`/bookdetails/${f.id}`)}>Get Now!</button>

                                    </article>
                                ))
                      
                        }

                        
                    </div>
               
                </div>
            </div>
        </section>

    );

}

export default Featured;