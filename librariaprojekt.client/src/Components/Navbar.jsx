import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
function Navbar() {
        let location = useLocation();
        const [sideBar, setSideBar] = useState(false);
        //const navigate = useNavigate();
        let accountLinks = null;
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
            <button id="openSidebar" style={sideBar ? { display: "none" } : null}
                onClick={() => setSideBar(s => !s)}
            >
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <nav className="navbar"
                style={sideBar ? { right: "0" } : { right: "-100%" }}>
                <ul>
                    <li>
                        <button id="closeSidebar"
                            onClick={() => setSideBar(s => !s)}>
                            <FontAwesomeIcon icon={faXmark}/>
                        </button>
                    </li>
                    <li className="homeLi">
                        <Link to={"/"}>Home</Link>
                    </li>
                    
                     
                          
                    {accountLinks}
                </ul>
            </nav>
            <div id="overlay" aria-hidden="true" style={sideBar ? { display: "block" } : null} onClick={() => setSideBar(false)}></div>
        </>
    );
    
}

export default Navbar;