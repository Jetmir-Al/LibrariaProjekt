import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import '../BookDetails.css';
const Reviews = ({name, comment, stars}) => {

    return (
            <div className='testimonial__card'>
                <h2 className='testimonial__title'>{name}</h2>
                <p className='testimonial__description'>
                    {comment}
                </p>
            <div className='testimonial__stars'>
                    {Array.from({ length: stars }).map((_, index) => (
                        <FontAwesomeIcon key={index} icon={faStar} className="starIcons" />
                    ))}
                </div>
            </div>
    );

}

export default Reviews;