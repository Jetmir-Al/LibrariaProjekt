import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import './signUp.css';
import { useContext } from "react";
import { ToggleAccountContext } from "../Context/toggleContext";
function SignUp() {

    const { setToggleAccount, setIsAccountMenuOpen } = useContext(ToggleAccountContext); 

    return (
        <div className="signup grid" id="signup-content">
            <form className="signup__form grid">
                <h3 className="signup__title">Sign Up</h3>

                <div className="signup__group grid">
                    <div>
                        <label htmlFor="signup-name" className="signup__label">Name</label>
                        <input type="text" placeholder="Write your name"
                            id="signup-name" className="signup__input" name="emri" required />
                    </div>

                    <div>
                        <label htmlFor="signup-email" className="signup__label">Email</label>
                        <input type="email" placeholder="Write your email" id="signup-email"
                            className="signup__input" name="email" required/>
                    </div>

                    <div>
                        <label htmlFor="signup-pass" className="signup__label">Password</label>
                        <input type="password" placeholder="Create a password"
                            id="signup-pass" className="signup__input" name="fjalekalimi" required/>
                    </div>

                    <div>
                        <label className="signup__label">Address</label>
                        <div className="addressZip">
                            <input type="text" placeholder="Address" id="signup-address" className="signup__input" name="adresa" required/>
                            <input type="text" placeholder="ZIP" id="signup-zip" className="signup__input" name="signup-zip" required/>
                        </div>
                    </div>

                    <div>

                        <span className="signup__login">
                            Already have an account? <a onClick={() => setToggleAccount(t => !t)}>Login</a>
                        </span>
                        <button type="submit" className="signup__button button">Sign Up</button>
                    </div>
                </div>
            </form>
            <div onClick={() => setIsAccountMenuOpen(t => !t)}>
                    <FontAwesomeIcon icon={faXmark} className="ri-close-line signup__close" />
            </div>
        </div>
    );
}
export default SignUp;