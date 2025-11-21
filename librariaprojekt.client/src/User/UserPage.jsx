import './userPage.css';
import Blerjet from './Blerjet.jsx';
import Huazimet from './Huazimet.jsx';


//Test component
import Loading from '../Components/Loading.jsx';
import Error from '../Components/Error.jsx';
import NoInfo from '../Components/NoInfo.jsx';

function UserPage() {

    return (
        <div className="userPage-container">
            <div className="userInfo">
                <div className="userCard">

                    <h2>
                        Username:
+                    </h2>
                    <h2>
                        Email:
                    </h2>
                    <address>
                        Address:
                    </address>

                    <button className="logout-button">
                        Logout!
                    </button>
                </div>
            </div>

            <div className="bookReviews-container">
                <h2 className="testimonial__title">Bought</h2>
                <div className="bookReviews">
                    {/*<Loading />*/}
                    {/*<Error/>*/}
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