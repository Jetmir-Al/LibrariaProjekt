

function Huazimet({ img, title, cardName, cardNum, total, borrowDate, returnDate, lateFee, returned }) {


    return (
        <div className='new__card swiper-slide boughtBooks'>
            <img src={`https://localhost:7262${img}`} alt='image' className='new__img'/>
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
                        Total:
                        <span > {total}$</span>
                    </h4>
                    <h4>
                        Borrow Date:

                        <span> {new Date(borrowDate).toDateString()} </span>
                    </h4>
                    <h4>
                        Return Date:
                        <span> {new Date(returnDate).toDateString()}</span>
                    </h4>
                    <h4>
                        Satatus:
                        {
                            returned === true ? <span> Book Returned </span> : <span> Book Not Returned </span> 
                        }
                    </h4>
                    <h4>
                        Late Fee:
                        <span> {
                            lateFee > 0 ?
                                `Extra pay: ${lateFee}$` :
                                "No extra pay!"
                            }
                        </span>
                    </h4>

                </div>
            </div>

        </div>
    );
}

export default Huazimet;