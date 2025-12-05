
import './BodyStyles/featured.css';
import Loading from "../Components/Loading";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

function Featured() {

    const [featured, setFeatured] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchFeautred = async () => {
            try {

                const response = await axios.get("https://localhost:7262/api/BookApi/featured");
                if (response.data.length > 0) {
                    setFeatured(response.data);
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
                                        key={index}>
                                    <img
                                        src={`https://localhost:7262${f.image}`}
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