/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCircleUser, faMoon, faReply, faBookBookmark, faBookmark, faHouse} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import SignUp from "../Account/SignUp";
import LogIn from "../Account/LogIn";
import { ToggleAccountContext } from "../Context/toggleContext";

function Navbar() {
    let location = useLocation();
        //const navigate = useNavigate();
    let accountLinks = null;
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
    const [toggleAccount, setToggleAccount] = useState(false);
    //const { user, setUser } = useContext(UserContext);
    

    //function logOut() {
    //    localStorage.removeItem('user');
    //    setUser(null);
    //    navigate('/');
    //    console.log("User loged out");
    //}
    


        if (location.pathname === "/logIn") {
            accountLinks =
                <li>
                    <Link className="activeLink" to={"/signUp"}>Sign-Up</Link>
                </li>
        }
        else if (location.pathname === "/signUp") {
            accountLinks =
                <li>
                    <Link className="activeLink" to={"/logIn"}>Log-In</Link>
                </li>
        }
        else {
            accountLinks =
                <>
                    <li>
                        <Link to={"/logIn"}>Login</Link>
                    </li>
                    <li>
                        <Link className="activeLink" to={"/signUp"}>Sign up</Link>
                    </li>
                </>
        }
    //} else if (user.role == "klient" || user.role == "agent") {
    //    accountLinks =
    //        <>
    //            <li>
    //                <Link to={"/user"}>Profile</Link>
    //            </li>
    //            <li>
    //                <a className="activeLink" onClick={() => logOut()}>Log-Out</a>
    //            </li>
    //        </>
    //}
    //else if (user.role == "admin") {
    //    accountLinks =
    //        <>
    //            <li>
    //                <Link to={"/admin"}>Profile</Link>
    //            </li>
    //            <li>
    //                {/*<a className="activeLink" onClick={() => logOut()}>Log-Out</a>*/}
    //            </li>
    //        </>
    //}
    //  className="account-container"
    return (
        <>
            <header className="header" id="header">
                <nav className="nav container">
                    <Link to="/" className="nav__logo">
                        <FontAwesomeIcon className="MainIcon" icon={faBook} /> E book
                    </Link>

                    <div className="nav_menu">
                        <ul className="nav__list">

                            <li className="nav__item">

                                <Link to="#home" className="nav__link active-link">
                                    <FontAwesomeIcon className="icon" icon={faHouse} />
                                    <span>Home</span>
                                </Link>
                            </li>

                            <li className="nav__item">
                                <Link to="#featured" className="nav__link">
                                    <FontAwesomeIcon className="icon" icon={faBookBookmark} />
                                    <span>Featured</span>
                                </Link>
                            </li>

                            <li className="nav__item">
                                <Link to="#new" className="nav__link">
                                <FontAwesomeIcon className="icon" icon={faBookmark} />
                                    <span>New Books</span>
                                </Link>
                            </li>

                            <li className="nav__item">

                                <Link to="#testimonial" className="nav__link">
                                    <FontAwesomeIcon className="icon" icon={faReply} />
                                    <span>Testimonial</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="nav__actions">

                        <div className="navAction" onClick={() => setIsAccountMenuOpen(a => !a)}>
                        <FontAwesomeIcon className="icon" icon={faCircleUser} />
                    </div>

                        <div className="navAction">
                            <FontAwesomeIcon className="icon" icon={faMoon} />
                    </div>

                    </div>
                </nav>
            </header>
            {
                isAccountMenuOpen ? <ToggleAccountContext.Provider value={{setToggleAccount, setIsAccountMenuOpen}}>
                    {toggleAccount ?
                        <SignUp />
                        :
                        <LogIn />
                    }
                    </ToggleAccountContext.Provider>
                    : null
            }
            
        </>
    );
    
}

export default Navbar;