import React from 'react'
import './MenuSlider.scss'
function MenuSlider() {
  return (
    <div className='container-menu'>
        <div className="our-menu commonpad txt-ctr">
                <h3>Our Delicious Menu</h3>
                <div className="cont">
                    <div className="row">
                        <div >
                            <div className="card">
                                <img className="card-img-top" src="https://www.curryleaf.nz/assets/images/g3-01.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Dine in Menu</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <img className="card-img-top" src="https://www.curryleaf.nz/assets/images/g1-01.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Takeaway Menu</h5>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div class="card">
                                <img class="card-img-top" src="https://www.curryleaf.nz/assets/images/g2-01.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Online Order</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="txt-ctr viewmorebut">

                    <div class="spclbutton"> ORDER ONLINE NOW </div>
                    

                </div>
            </div>
    </div>
  )
}

export default MenuSlider