import './userPage.css';
import Blerjet from './Blerjet.jsx';
import Huazimet from './Huazimet.jsx';
import NoInfo from '../Components/NoInfo.jsx';

import { useContext, useState, useEffect } from "react"; 
import { AuthContext } from "../Context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { getUserPurchases } from '../api/buyApi';
import { getUserBorrows } from '../api/borrowApi';

function UserPage() {

    const { user, logout } = useContext(AuthContext);
    const [purchase, setPurchase] = useState([]);
    const [borrow, setBorrow] = useState([]);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };


    useEffect(() => {
        const fetchPurchase = async () => {
            if (user.id) {
                try {

                    const res = await getUserPurchases(user.id);

                    setPurchase(res);
                }
                catch (err) {
                    console.error(err);
                }
            }
        }
        const fetchBorrow = async () => {
            if (user.id) {
                try {

                    const res = await getUserBorrows(user.id);

                    setBorrow(res);
                }
                catch (err) {
                    console.error(err);
                }
            }
        }
        fetchPurchase();
        fetchBorrow();

    }, [user.id]);

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
                    <em>
                        Number of books purchesed: {purchase.length}
                    </em>
                    <em>
                        Number of books borrowed: {borrow.length}
                    </em>

                    <button className="logout-button" onClick={handleLogout}>
                        Logout!
                    </button>
                </div>
            </div>

            <div className="bookReviews-container">
                <h2 className="testimonial__title">Purchase</h2>
                <div className="bookReviews">
                    {
                        purchase.length > 0 ?
                            purchase.map((p, index) => (
                                <Blerjet key={index}
                                    img={p.image}
                                    cardName={p.cardholderName}
                                    cardNum={p.maskedCardNumber}
                                    title={p.bookTitle}
                                    date={p.purchaseDate}
                                    total={p.total}
                                    quantity={p.quantity }
                                />
                            ))
                            :
                            < NoInfo /> 
                    }
                </div>
            </div>

            <div className="bookReviews-container">
                <h2 className="testimonial__title">Borrowed</h2>
                <div className="bookReviews">
                    
                    {
                        borrow.length > 0 ?
                            borrow.map((b, index) => (
                                <Huazimet key={index}
                                    title={b.bookTitle}
                                    borrowDate={b.borrowDate}
                                    cardName={b.cardholderName}
                                    cardNum={b.maskedCardNumber}
                                    returnDate={b.returnDate}
                                    total={b.total}
                                    img={b.image}
                                    lateFee={b.lateFee}
                                    returned={b.returned }
                                />
                            ))
                            :
                            < NoInfo />
                    }
                </div>
            </div>
        </div>
    );


}

export default UserPage;