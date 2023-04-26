import React from "react";
import { Map } from "../../js/component/Map.js";
import logo from "../../img/BLKLOGO.png";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* <div> */}
      <img className="contact-logo" src={logo}></img>
      {/* </div> */}
      <div className="contact-page">
        <div className="contact-form-2">
          <form id="contact_form" name="contact_form" method="post">
            <div className="mb-3 row">
              <div className="col">
                <label>First Name</label>
                <input
                  type="text"
                  required
                  maxLength="50"
                  className="form-control"
                  id="first_name"
                  name="first_name"
                />
              </div>
              <div className="col">
                <label>Last Name</label>
                <input
                  type="text"
                  required
                  maxLength="50"
                  className="form-control"
                  id="last_name"
                  name="last_name"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label htmlFor="email_addr">Email address</label>
                <input
                  type="email"
                  required
                  maxLength="50"
                  className="form-control"
                  id="email_addr"
                  name="email"
                  placeholder=""
                />
              </div>
              <div className="col">
                <label htmlFor="phone_input">Phone Number</label>
                <input
                  type="tel"
                  required
                  maxLength="50"
                  className="form-control"
                  id="phone_input"
                  name="Phone"
                  placeholder=""
                />
              </div>
              {/* </div> */}
              <div className="mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="send-btn">
                Send
              </button>
            </div>
          </form>
        </div>
        {/* <div className="map-container">
          <Map />
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
