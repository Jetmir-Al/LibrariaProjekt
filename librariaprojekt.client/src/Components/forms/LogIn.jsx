import './login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ToggleAccountContext } from "../../context/toggleContext";
import { loginAdmin, loginUser } from '../../api/authApi.js'; 
import { useAuthHook } from '../../hooks/useAuthHook';
function LogIn() {

    const { setToggleAccount, setIsAccountMenuOpen } = useContext(ToggleAccountContext);
    const { setUser, setIsLoggedIn } = useAuthHook(); 

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [badInfo, setBadInfo] = useState(false);

    const LoginUser = async (e) => {
        e.preventDefault();

        if (email.includes("@admin.com")) {

            try {
                await loginAdmin({Email: email, Password: password});


                window.location = import.meta.env.VITE_API_URL + "/Book/Index";
            } catch {
                setBadInfo(true);
            }

        } else {

            try {
                const res = await loginUser({ Email: email, Password: password });

                setUser({
                    id: res.id,
                    name: res.name,
                    email: res.email
                });
                setIsLoggedIn(true);

                setIsAccountMenuOpen(false);
            }
            catch {
                setBadInfo(true);
            }
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
                    {
                        badInfo && 
                    <div>
                        <h5 className="badInfo">Email or password is wrong!</h5>
                    </div>
                    }
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