import './BodyStyles/services.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faLock, faHeadset } from "@fortawesome/free-solid-svg-icons";
function Services() {
    return (
        <section className="services section">
            <div className="services__container grid">
                <article className="services__card">
                    <FontAwesomeIcon className="serviceIcon" icon={faTruck} />
                    <h3 className="services__title">Free Shipping</h3>
                    <p className="services__description">Order more than 100$</p>

                </article>
                <article className="services__card">
                    <FontAwesomeIcon icon={faLock}
                        className="serviceIcon" />
                    <h3 className="services__title">Secure Payment</h3>
                    <p className="services__description">100% Secure Payment</p>

                </article>
                <article className="services__card">
                    <FontAwesomeIcon icon={faHeadset}
                        className="serviceIcon" />
                    <h3 className="services__title">24/7 Support</h3>
                    <p className="services__description">Call us anytime</p>

                </article>
            </div>
        </section>
    );
}

export default Services;