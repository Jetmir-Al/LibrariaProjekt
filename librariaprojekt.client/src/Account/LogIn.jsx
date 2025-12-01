import './login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ToggleAccountContext } from "../Context/toggleContext";
import { AuthContext } from '../Context/AuthContext';
import axios from "axios";
function LogIn() {

    const { setToggleAccount, setIsAccountMenuOpen } = useContext(ToggleAccountContext);
    const { setUser, setIsLoggedIn } = useContext(AuthContext); 

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const LoginUser = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                'https://localhost:7262/api/UserApi/login', {
                Email: email,
                Password: password
            }, { withCredentials: true });

            setUser({
                id: res.data.id,
                name: res.data.name,
                email: res.data.email
            });
            setIsLoggedIn(true);

            setIsAccountMenuOpen(false);
            console.log("loged in");
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="login grid" id="login-content">
                <form className="login__form grid" onSubmit={LoginUser}>
                    <h3 className="login__title">Login</h3>

                    <div className="login__group grid">
                        <div>
                            <label htmlFor="login-email" className="login__label">Email</label>
                            <input type="email" placeholder="Write your email" id="login-email"
                                className="login__input" name="email" required
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="login-pass" className="login__label">Password</label>
                            <input type="password" placeholder="Enter your password" id="login-pass"
                                className="login__input" name="password" required
                                onChange={(e) => setPassword(e.target.value)} />
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