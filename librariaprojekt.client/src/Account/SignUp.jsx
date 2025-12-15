import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import './signUp.css';
import { useContext } from "react";
import { ToggleAccountContext } from "../Context/toggleContext";
import { useState } from "react";
import axios from "axios";

function SignUp() {

    const { setToggleAccount, setIsAccountMenuOpen } = useContext(ToggleAccountContext); 
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [badInfo, setBadInfo] = useState(false);
    const [badEmail, setBadEmail] = useState(false);

    async function handleSignUp(e) {
        e.preventDefault();

        const regex = /.*\.com$/;


        if (!regex.test(email)) {
            setBadEmail(true);
        } else {


            try {
                await axios.post(
                    'https://localhost:7262/api/UserApi/createUser',
                    {
                        Name: name,
                        Email: email,
                        Password: password
                    }
                );
                setToggleAccount(t => !t);
            } catch (error) {
                console.error("Error during sign up:", error);
                setBadInfo(true);
            }
        }
    }







    return (
        <div className="login signup grid" id="signup-content">
            <form className="signup__form grid" onSubmit={handleSignUp}>
                <h3 className="signup__title">Sign Up</h3>

                <div className="signup__group grid">
                    <div>
                        <label htmlFor="signup-name" className="signup__label">Name</label>
                        <input type="text" placeholder="Write your name"
                            id="signup-name" className="signup__input"
                            name="emri" required
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="signup-email" className="signup__label">Email</label>
                        <input type="email" placeholder="Write your email" id="signup-email"
                            className="signup__input" name="email" required
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="signup-pass" className="signup__label">Password</label>
                        <input type="password" placeholder="Create a password"
                            id="signup-pass" className="signup__input" name="fjalekalimi" required 
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    {
                        badInfo &&
                        <div>
                            <h5 className="badInfo">Try a diffrent email or password!</h5>
                        </div>
                    }
                    {
                        badEmail &&
                        <div>
                            <h5 className="badInfo">Try a useing .com at the end of the Email!</h5>
                        </div>
                    }

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