import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Error from '../../Components/Error.jsx';
import { ToggleBuy } from '../../Context/toggleContext.jsx';

function BuyForm() {

    const [cardName, setCardName] = useState(null);
    const [cardNumber, setCardNum] = useState(null);
    const { id } = useParams();
    const [bookQuantity, setBookQuantity] = useState(1);

    const { toggleBuy, setToggleBuy, bookDetailsQuantity, fetchBookDetails } = useContext(ToggleBuy);

    const handleBuySubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://localhost:7262/api/PurchaseApi/create/${id}`, {
                Quantity: bookQuantity,
                CardholderName: cardName,
                CardNumber: cardNumber
            }, { withCredentials: true });
            setToggleBuy(false);
            //console.log(res.data);
            fetchBookDetails();
        } catch (err) {
            console.error(err.message);
        }

    }

    return (
        <div className="grid" id="buyContent"
            style={{ display: toggleBuy ? "flex" : "none" }}>
            <form className="login__form grid"
                onSubmit={handleBuySubmit}>
                <h3 className="login__title">Buy</h3>

                <div className="login__group grid">

                    <div>
                        <label className="login__label">Name:</label>
                        <input type="text" placeholder="Write the card holder's name!" className="login__input" name="cardName" required
                            onChange={(e) => setCardName(e.target.value)} />
                    </div>

                    <div>
                        <label className="login__label">Card number:</label>
                        <input type="number" placeholder="Enter your card number!" className="login__input" name="cardNumber" required
                            onChange={(e) => setCardNum(e.target.value)} />
                    </div>

                    <div>
                        <label className="login__label">Password:</label>
                        <input type="password" placeholder="Enter your card password!" className="login__input" name="cardPsw" required
                        />
                    </div>
                    <div>
                        <label className="login__label">Quantity:</label>
                        <input type="number" min="1" max={bookDetailsQuantity} className="login__input" required
                            placeholder="Enter number of copies to buy!"
                            onChange={(e) => setBookQuantity(e.target.value)} />
                    </div>
                </div>

                <div>
                    <button type="submit" className="login__button button">Buy</button>
                </div>
            </form>
            <FontAwesomeIcon icon={faXmark} className="login__close"
                onClick={() => setToggleBuy(b => !b)}
            />
        </div>
    );
}

export default BuyForm;