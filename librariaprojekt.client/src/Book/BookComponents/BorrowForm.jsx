import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToggleBorrow } from '../../Context/toggleContext.jsx';

function BorrowForm() {

    const { id } = useParams();
    const [cardName, setCardName] = useState(null);
    const [cardNumber, setCardNum] = useState(null);

    const { toggleBorrow, setToggleBorrow, fetchBookDetails } = useContext(ToggleBorrow);

    const formatDate = (date) =>
        date.toISOString().split("T")[0];

    const today = formatDate(new Date());


    const [borrowDate, setBorrowDate] = useState(today);
    const [returnDate, setReturnDate] = useState(today);
    const maxRange = new Date(borrowDate);
    maxRange.setDate(maxRange.getDate() + 14);
    const maxDate = formatDate(maxRange);

    useEffect(() => {
        const b = new Date(borrowDate).getTime();
        const r = new Date(returnDate).getTime();

        if (b > r) setBorrowDate(returnDate);
    }, [returnDate]);

    useEffect(() => {
        const b = new Date(borrowDate).getTime();
        const r = new Date(returnDate).getTime();

        if (r < b) setReturnDate(borrowDate);

    }, [borrowDate]);
    

    const handleBorrowSubmit = async (e) => {
        e.preventDefault();

       

        try {
            await axios.post(`https://localhost:7262/api/BorrowApi/create/${id}`, {
                BorrowDate: borrowDate,
                ReturnDate: returnDate,
                CardholderName: cardName,
                CardNumber: cardNumber
            }, { withCredentials: true });
            setToggleBorrow(false);
            //console.log(res.data);
            fetchBookDetails();

        } catch (error) {
            console.error(error.message);
        }
    } 

    return (
        <div className="grid" id="borrowContent"
            style={{ display: toggleBorrow ? "flex" : "none" }}>
            <form className="login__form grid"
                onSubmit={handleBorrowSubmit}>

                <h3 className="login__title">Borrow</h3>

                <div className="login__group grid">

                    <div>
                        <label htmlFor="login-email" className="login__label">Name:</label>
                        <input type="text" placeholder="Write the card holder's name!" className="login__input" name="cardName" required
                            onChange={(e) => setCardName(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="login-pass" className="login__label">Card number:</label>
                        <input type="number" placeholder="Enter your card number!" className="login__input" name="cardNumber" required
                            onChange={(e) => setCardNum(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="login-pass" className="login__label">Password:</label>
                        <input type="password" placeholder="Enter your card password!" className="login__input" name="cardPsw" required />
                    </div>
                    <div>
                        <label className="login__label ">Borrow date:</label>
                        <input
                            type="date"
                            className="login__input"
                            required
                            value={borrowDate}
                            min={today}
                            onChange={(e) => setBorrowDate(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="login__label">Return date:</label>
                        <input
                            type="date"
                            className="login__input"
                            required
                            value={returnDate}
                            min={borrowDate}
                            max={maxDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <button type="submit" className="login__button button">Borrow</button>
                </div>
            </form>
            <FontAwesomeIcon icon={faXmark} className="login__close"
                onClick={() => setToggleBorrow(b => !b)}
            />
        </div>
    );
}

export default BorrowForm;