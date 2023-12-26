import React, { Fragment } from 'react'

import icon1 from '../assets/images/icons/icon1.png'
import icon2 from '../assets/images/icons/icon2.png'
import icon3 from '../assets/images/icons/icon3.png'
import icon4 from '../assets/images/icons/icon4.png'
import icon5 from '../assets/images/icons/icon5.png'
import icon6 from '../assets/images/icons/icon6.png'


function Hero() {
    return (
        <Fragment>
            <section className='hero p-2>'>
                <div>
                    <div className='row'>
                        <div className='hero-details d-flex justify-content-around text-center p-2'>
                            <div className='card p-2'>
                                <img src={icon1} alt='icon-1' className='img-fluid' />
                                <p>Fast Orders</p>
                            </div>
                            <div className='card p-2'>
                                <div className='card-details p-2'>

                                </div>
                                <img src={icon2} alt='icon-1' className='img-fluid' />
                                <p>Quick Shippings</p>
                            </div>
                            <div className='card p-2'>
                                <img src={icon3} alt='icon-1' className='img-fluid' />
                                <p>High Saves</p>
                            </div>
                            <div className='card p-2'>
                                <img src={icon4} alt='icon-1' className='img-fluid' />
                                <p>24*7 Support</p>
                            </div>
                            <div className='card p-2'>
                                <img src={icon5} alt='icon-1' className='img-fluid' />
                                <p>Discounts</p>
                            </div>
                            <div className='card p-2'>
                                <img src={icon6} alt='icon-1' className='img-fluid' />
                                <p>Certified Seller</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Hero
