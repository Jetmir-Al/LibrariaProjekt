
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

function NoInfo() {

    return (
        <div className="noInfo-container">
            <FontAwesomeIcon
                icon={faCircleQuestion}
                className="noInfoIcon" />
            <h2>There is no information here yet!</h2>
        </div>
    );
}

export default NoInfo;