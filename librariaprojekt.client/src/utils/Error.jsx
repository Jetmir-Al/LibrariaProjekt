import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function Error({ title, details }) {
  const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="error-Container">
            <div className="error">
                <FontAwesomeIcon className="errorIcon"
                    icon={faTriangleExclamation} />


                <div className="errorInfo">
                    <div className="errorTitle">{title}</div>
                </div>
            </div>

            {details && (
                <div className="errorDetails">
                    <button
                        type="button"
                        onClick={() => setShowDetails((s) => !s)}>
                        {showDetails ? 'Hide details' : 'Show details'}
                    </button>

                    {showDetails && (
                        <p className="errorDetailsText">
                            {details}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}


Error.defaultProps = {
  title: 'An error occurred',
    details: "",
    onRetry: null,
    onClose: null
};