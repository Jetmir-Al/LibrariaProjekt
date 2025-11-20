import './login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ToggleAccountContext } from "../Context/toggleContext";
function LogIn() {
    const { setToggleAccount, setIsAccountMenuOpen } = useContext(ToggleAccountContext);


    return (
        <>
            <div className="login grid" id="login-content">
                <form className="login__form grid">
                    <h3 className="login__title">Login</h3>

                    <div className="login__group grid">
                        <div>
                            <label htmlFor="login-email" className="login__label">Email</label>
                            <input type="email" placeholder="Write your email" id="login-email"
                                className="login__input" name="email" required />
                        </div>

                        <div>
                            <label htmlFor="login-pass" className="login__label">Password</label>
                            <input type="password" placeholder="Enter your password" id="login-pass"
                                className="login__input" name="password" required />
                        </div>
                    </div>

                    <div>
                        <span className="login__signup">
                            You do not have an account? <a onClick={() => setToggleAccount(t => !t)}>Sign up</a>
                        </span> 
                        <br/>
                        <button type="submit" className="login__button button">Login</button>
                    </div>
                </form>
                <div onClick={() => setIsAccountMenuOpen(t => !t)}>
                    <FontAwesomeIcon icon={faXmark} className="ri-close-line signup__close" />
                </div>
            </div>
        </>
    );
}
export default LogIn;