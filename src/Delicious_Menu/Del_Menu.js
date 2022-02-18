import React from "react";
import "./Del_Menu.scss";
function Del_Menu() {
  return (
    <div className="container__menu">
      <div className="our-menu commonpad txt-ctr">
        <h3>Our Delicious Menu</h3>
        <div className="cont">
          <div className="row">
            <div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://www.curryleaf.nz/assets/images/g3-01.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Dine in Menu</h5>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://www.curryleaf.nz/assets/images/g1-01.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Takeaway Menu</h5>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://www.curryleaf.nz/assets/images/g2-01.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Online Order</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="spclbuttonMenu"> View all Menu </div>
        </div>
      </div>
    </div>
  );
}

export default Del_Menu;
