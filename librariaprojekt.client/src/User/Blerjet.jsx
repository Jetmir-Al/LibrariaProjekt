

function Blerjet({ img, title, cardName, cardNum, total, date, quantity }) {


    
    return (
        <div className='new__card swiper-slide boughtBooks'>
            <img src={`https://localhost:7262${img}`} alt='image' className='new__img' />
            <div className='boughtInfo'>
                <h2 className='testimonial__title'>
                    {title}
                </h2>
                <div className='boughtBookInfo'>
                    <h4> Card Name:
                        <span> {cardName}</span>
                    </h4>
                    <h4>
                        Card Number:
                        <span> {cardNum}</span>
                    </h4>
                    <h4>
                        Books Bought:
                        <span > {quantity}</span>
                    </h4>
                    <h4>
                        Total:
                        <span > {total}$</span>
                    </h4>
                    <h4>
                        Bought Date:
                        <span> {new Date(date).toDateString()}</span>
                    </h4>

                </div>
            </div>

        </div>
    );
}

export default Blerjet;