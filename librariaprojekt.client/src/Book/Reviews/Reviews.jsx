import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import '../BookDetails.css';
const Reviews = () => {

    return (
        <div className="bookReviews">
            <div className='testimonial__card'>
                <h2 className='testimonial__title'>'emri'</h2>
                <p className='testimonial__description'>
                    'komenti'
                </p>
                <div className='testimonial__stars'>
                    <FontAwesomeIcon icon={faStar} className="starIcons" />
                </div>
            </div>
        </div>
    );

}

export default Reviews;