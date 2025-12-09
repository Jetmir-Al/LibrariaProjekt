import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar, faFileCircleQuestion, faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";
import './BodyStyles/rules.css';

function Rules() {

    return (
        <section className="services rulesSection" id="ruleSection">
            <h2 className="section__title">
                Rules 
            </h2>
            <div className="rulesContainer grid">
                <article className="services__card rulesCard">
                    <FontAwesomeIcon
                        icon={faMoneyBillTrendUp}
                        className="serviceIcon"
                    />
                    <h3 className="services__title">
                        Late Return Fee
                    </h3>
                    <p className="services__description rulesDescription">
                        If a user returns a borrowed book after the due date, 
                        a late fee of $0.50 per day is applied.
                    </p>

                </article>
                <article className="services__card rulesCard">
                    <FontAwesomeIcon icon={faHandHoldingDollar}
                        className="serviceIcon"
                    />
                    <h3 className="services__title">
                        Damage Fee
                    </h3>
                    <p className="services__description rulesDescription">
                        If a borrowed book is returned damaged, 
                        the user must pay a damage fee
                        (or pay the full replacement cost depending on severity).
                    </p>

                </article>
                <article className="services__card rulesCard">
                    <FontAwesomeIcon
                        icon={faFileCircleQuestion}
                        className="serviceIcon" />
                    <h3 className="services__title">
                        Lost Book Policy
                    </h3>
                    <p className="services__description rulesDescription">
                        If the user loses a book,
                        they must pay double the book's orginal price.
                    </p>

                </article>
            </div>
        </section>
    );
}

export default Rules;