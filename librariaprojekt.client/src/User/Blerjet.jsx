

function Blerjet() {
    return (
        <div className='new__card swiper-slide boughtBooks'>
            <img src='src/assets/imgs/book-9.png' alt='image' className='new__img' />
            <div className='boughtInfo'>
                <h2 className='testimonial__title'>
                    'titulli'
                </h2>
                <div className='boughtBookInfo'>
                    <h4> Author:
                        <span> 'autori'</span>
                    </h4>
                    <h4>
                        Category:
                        <span> 'kategoria'</span>
                    </h4>
                    <h4>
                        Price:
                        <span > 'totali'$</span>
                    </h4>
                    <h4>
                        Bought Date:
                        <span> data_blerjes'</span>
                    </h4>

                </div>
            </div>

        </div>
    );
}

export default Blerjet;