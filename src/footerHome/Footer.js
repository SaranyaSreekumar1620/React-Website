import React from 'react';
import './Footer.scss';

function Footer() {
  return (
      <>
    <div>
          <div className="bottom-cont">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='imlogo'>
                            <a href="/">
                                <img src="https://www.curryleaf.nz/assets/images/Curry-Leaf-logo.png" alt="" />
                            </a>
                        </div>
                        <span>
                            128 Johnsonville Road,
                            Johnsonville, 6037
                        </span><br />
                        <a href="tel:04-478 3134">Ph: 04-478 3134</a><br />
                        <a href="mailto:info.curryleafwellington@gmail.com">Email:info.curryleafwellington@gmail.com</a>
                    </div>
                    <div classNmae="col">
                        <div className="links">
                            <h3>LINKS</h3>
                            <ul >
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/">About us</a>
                                </li>
                                <li>
                                    <a href="/">Menu</a>
                                </li>
                                <li>
                                    <a href="/">Gallery</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <h3>BOOK YOUR TABLE</h3>
                        </div>
                        <div className="colorgreen"> BOOK TABLE </div>
                    </div>
                    <div className="col">
                        <div>
                            <h3>OPENING HOURS</h3>
                        </div>
                        <ul className="working">
                            <li>
                                <h4 className="font-17">Tuesday to Sunday</h4>
                            </li>
                            <li className="font-12">Dinner</li>
                            <li className="font-12">( 4:30 PM - 9:30 PM )</li>
                            <h4 className="font-17"></h4>
                            <li className="font-12"></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>

        </div>
        <div className="end">
            <div className="container">
                <span>Copyright 2020 © Curry leaf - All Rights Reserved</span>
                <div className="flt-rt social">
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        </>
    
  )
}

export default Footer