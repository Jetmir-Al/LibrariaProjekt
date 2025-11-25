import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container grid">
                <div>
                    <a href="" className="footer__logo">
                        <FontAwesomeIcon icon={faBook}
                            className="footerIcon" />E-Book
                    </a>

                    <p className="footer__description">
                        Find and explore the best <br />
                        eBooks from all your <br />
                        favorite writers.
                    </p>
                </div>
                <div className="footer__data grid">
                    <div>
                        <h3 className="footer__title">About</h3>

                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">Awards</a>
                            </li>

                            <li>
                                <a href="#" className="footer__link">FAQs</a>
                            </li>

                            <li>
                                <a href="#" className="footer__link">Privacy Policy</a>
                            </li>

                            <li>
                                <a href="#" className="footer__link">Terms of Services</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer__title">Comapany</h3>

                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">Blogs</a>
                            </li>

                            <li>
                                <a href="#" className="footer__link">Community</a>
                            </li>

                            <li>
                                <a href="#" className="footer__link">Our team</a>
                            </li>

                            <li>
                                <a href="#" className="footer__link">Help center</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer__title">Contact</h3>

                        <ul className="footer__links">
                            <li>
                                <address className="footer__info">
                                    London 1143 <br />
                                    Hampton Hill TW12J
                                </address>
                            </li>

                            <li>
                                <address className="footer__info">
                                    e.book@email.com <br />
                                    0987-654-321
                                </address>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer__title">Social</h3>

                        <div className="footer__social">
                            <a href="https://facebook.com/" target="_blank" className="footer__social-link">
                                <FontAwesomeIcon icon={faFacebook}
                                    className="footerSocialIcon" />
                            </a>
                            <a href="https://instagram.com/" target="_blank" className="footer__social-link">
                                <FontAwesomeIcon icon={faInstagram}
                                    className="footerSocialIcon" />
                            </a>
                            <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                                <FontAwesomeIcon icon={faXTwitter}
                                    className="footerSocialIcon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;