import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Error from '../../Components/Error.jsx';
import { AuthContext } from '../../Context/AuthContext.jsx';
import { ToggleBorrow } from '../../Context/toggleContext.jsx';

function BorrowForm() {

    const { id } = useParams();
    const [cardName, setCardName] = useState(null);
    const [cardNumber, setCardNum] = useState(null);

    const { toggleBorrow, setToggleBorrow } = useContext(ToggleBorrow);

    const formatDateTime = (date) =>
        date.toISOString().slice(0, 16);

    const today = new Date();
    const todayDT = formatDateTime(today);

    const maxRange = new Date();
    maxRange.setDate(maxRange.getDate() + 14);
    const maxDateDT = formatDateTime(maxRange);

    const [borrowDate, setBorrowDate] = useState(todayDT);
    const [returnDate, setReturnDate] = useState(todayDT);

    //Caktimi i dates per borrow
    useEffect(() => {

        const b = new Date(borrowDate);

        const maxReturn = new Date(b);
        maxReturn.setDate(maxReturn.getDate() + 14);

        if (new Date(returnDate) < b) {
            setReturnDate(formatDateTime(b));
        }

    }, [borrowDate]);

    useEffect(() => {
        const r = new Date(returnDate);

        if (new Date(borrowDate) > r) {
            setBorrowDate(formatDateTime(r));
        }

    }, [returnDate]);
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
                        <label className="login__label">Data e huazimit:</label>
                        <input
                            type="datetime-local"
                            className="login__input"
                            required
                            value={borrowDate}
                            min={todayDT}
                            max={maxDateDT}
                            onChange={(e) => setBorrowDate(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="login__label">Data e kthimit:</label>
                        <input
                            type="datetime-local"
                            className="login__input"
                            required
                            value={returnDate}
                            min={borrowDate}
                            max={(() => {
                                const b = new Date(borrowDate);
                                b.setDate(b.getDate() + 14);
                                return b.toISOString().split("T")[0];
                            })()}
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