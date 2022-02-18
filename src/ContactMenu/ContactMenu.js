import React from "react";
import "./ContactMenu.scss";
function ContactMenu() {
  return (
    <div className="container-contact">
      <div className="contactus txt-ctr aos-init aos-animate">
        <div className="row">
          <div className="details">
            <h3>CurryLeaf</h3>
            <p>
              128 Johnsonville Road, Johnsonville, 6037 <br />
              <a href="tel:04-478 3134">Ph: 04-478 3134</a>
              <br />
              <a href="mailto:info.curryleafwellington@gmail.com">
                Email: info.curryleafwellington@gmail.com
              </a>
            </p>
          </div>
          <div className="col-smmm">
            <h3>SAY HELLO</h3>
            <form>
              <div className="row">
                <div className="col-smmm">
                  <div className="form-group">
                    <input
                      name="contactname"
                      id="contactname"
                      type="text"
                      className="text_box1 form-control"
                      placeholder="Enter your Name"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-smmm">
                  <div className="form-group">
                    <input
                      name="contactemail"
                      id="contactemail"
                      type="text"
                      className="text_box1 form-control"
                      placeholder="Enter your mail id"
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="contactmessage"
                  id="contactmessage"
                  cols=""
                  rows=""
                  class="text_box2 form-control"
                  placeholder="Message"
                ></textarea>
              </div>
              <input
                name="submit"
                type="submit"
                className="send fontfam spclbutton"
                value="Contact Us"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMenu;
