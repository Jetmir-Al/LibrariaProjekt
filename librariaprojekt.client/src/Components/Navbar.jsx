/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faUserGear, faBook, faCircleUser, faMoon, faReply, faBookBookmark, faBookmark} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import SignUp from "../Account/SignUp";
import LogIn from "../Account/LogIn";
import { ToggleAccountContext, ToggleLightDarkContext } from "../Context/toggleContext";
import { AuthContext } from "../Context/AuthContext";
function Navbar() {
    const navigate = useNavigate();
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
    const [toggleAccount, setToggleAccount] = useState(false);

    const { lightDark, setLightDark } = useContext(ToggleLightDarkContext);

    const { isLoggedIn } = useContext(AuthContext);
      
    return (
        <>
            <header className="header" id="header">
                <nav className="nav">
                    <Link to="/" className="nav__logo">
                        <FontAwesomeIcon className="MainIcon" icon={faBook} /> E book
                    </Link>

                    <div className="nav_menu">
                        <ul className="nav__list">


                            <li className="nav__item">
                                <a href="/#featured" className="nav__link">
                                    <FontAwesomeIcon className="icon" icon={faBookBookmark} />
                                    <span>Featured</span>
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="/#new" className="nav__link">
                                <FontAwesomeIcon className="icon" icon={faBookmark} />
                                    <span>New Books</span>
                                </a>
                            </li>

                            <li className="nav__item">

                                <a href="/#testimonial" className="nav__link">
                                    <FontAwesomeIcon className="icon" icon={faReply} />
                                    <span>Testimonial</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="nav__actions">

                        <div className="navAction">
                        {
                            isLoggedIn ?
                                <FontAwesomeIcon icon={faUserGear} className="icon"
                                    onClick={() => navigate("/user-profile")} />
                                :
                                    <FontAwesomeIcon className="icon" icon={faCircleUser}
                                    onClick={() => setIsAccountMenuOpen(a => !a)}                                    />
                        }
                        </div>

                        <div className="navAction">
                            {
                                
                                lightDark ?
                                    <FontAwesomeIcon className="icon" icon={faSun}
                                        onClick={() => setLightDark(d => !d)} />
                                    :
                                    <FontAwesomeIcon className="icon" icon={faMoon}
                                        onClick={() => setLightDark(d => !d)} />
                                           
                            }
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