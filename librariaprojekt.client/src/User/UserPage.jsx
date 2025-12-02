import './userPage.css';
import Blerjet from './Blerjet.jsx';
import Huazimet from './Huazimet.jsx';

import { useContext } from "react"; 
import { AuthContext } from "../Context/AuthContext.jsx";
import { useNavigate } from "react-router-dom"; 

//Test component
import Loading from '../Components/Loading.jsx';
import Error from '../Components/Error.jsx';
import NoInfo from '../Components/NoInfo.jsx';



function UserPage() {

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();
        navigate('/');
    };
    if (!user) {
        return <Loading />;
    }

    return (
        <div className="userPage-container">
            <div className="userInfo">
                <div className="userCard">

                    <h2>
                        Username: {user.name}
                    </h2>
                    <h2>
                        Email: {user.email}
                    </h2>

                    <button className="logout-button" onClick={handleLogout}>
                        Logout!
                    </button>
                </div>
            </div>

            <div className="bookReviews-container">
                <h2 className="testimonial__title">Bought</h2>
                <div className="bookReviews">

                    <NoInfo/>
                    {/*<Blerjet />*/}
                </div>
            </div>

            <div className="bookReviews-container">
                <h2 className="testimonial__title">Borrowed</h2>
                <div className="bookReviews">
                    <Huazimet />
                    <Huazimet />
                    <Huazimet />
                </div>
            </div>
        </div>
    );


}

export default UserPage;