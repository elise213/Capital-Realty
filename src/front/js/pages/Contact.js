import React from "react";
import { Map } from "../../js/component/Map.js";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* <div className="circle">
        {" "}
        <i className="fas fa-phone me-3"></i>
        305-663-6633
      </div> */}
      {/* <div>
        <div>

        </div>
        <div>
          <i className="far fa-envelope me-3"></i>
          info@capital-realty.com
        </div>
      </div> */}
      <div className="row">
        <div className="contact-form col-6">
          <form id="contact_form" name="contact_form" method="post">
            <div className="mb-5 row">
              <div className="col">
                <label>First Name</label>
                <input
                  type="text"
                  required
                  maxlength="50"
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
                  maxlength="50"
                  className="form-control"
                  id="last_name"
                  name="last_name"
                />
              </div>
            </div>
            <div className="mb-5 row">
              <div className="col">
                <label for="email_addr">Email address</label>
                <input
                  type="email"
                  required
                  maxlength="50"
                  className="form-control"
                  id="email_addr"
                  name="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="col">
                <label for="phone_input">Phone</label>
                <input
                  type="tel"
                  required
                  maxlength="50"
                  className="form-control"
                  id="phone_input"
                  name="Phone"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="mb-5">
              <label for="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn bio-btn px-4">
              Send
            </button>
          </form>
        </div>
        <div className="col-6">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
