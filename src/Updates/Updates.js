import React from 'react'
import './Updates.scss'

function Updates() {
  return (
    <div>
         <div className="testimonial-cont txt-ctr pos-rel">
            <div className="overlay pos-abs"></div>
            <div className="pad-40">

                <div className="slider">
                    {/* swipper */}
                    <div className="swiper-container">
                        <h3>Updates </h3>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="slider-content">

                                    <div className="text">
                                        <span>Great News</span>
                                        <p>We are going to be Licenced Bar & BYO
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="slider-content">

                                    <div className="text">
                                        <span>Drinks Menu Updating</span>
                                        <p>We are coming up with new beverages menu
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="slider-content">

                                    <div className="text">
                                        <span>Liquor Licence done!!</span>
                                        <p>We are going to be fully Licenced Bar & BYO
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Add Arrows --> */}
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Updates