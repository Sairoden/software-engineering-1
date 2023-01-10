import React from "react";

import Footer from "../Footer/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="contact-us flex-c justify-content-center">
        <div className="heading">Customer Support</div>
        <div className="sub-heading text-center">
          <p>
            Use the contact form below for everything regarding your order or
            issues on the site.
          </p>
          <p>
            <b>(Returns & exchanges, lost packages, wrong size etc.)</b>
          </p>
        </div>
        <form className=" form justify-content-center">
          <div className="row">
            <div className="col-50">
              <div>
                <label htmlFor="fName">
                  <h3 className="label">First Name</h3>
                </label>
              </div>
              <input type="text" id="fName" className="input" required />
            </div>
            <div className="col-50">
              <div>
                <label htmlFor="lName">
                  <h3 className="label">Last Name</h3>
                </label>
              </div>
              <input type="text" id="lName" className="input" />
            </div>
          </div>
          <div className="row">
            <div className="col-50">
              <div>
                <label htmlFor="email">
                  <h3 className="label">Email Address</h3>
                </label>
              </div>
              <input type="email" id="email" className="input" required />
            </div>
            <div className="col-50">
              <div>
                <label htmlFor="orderNum">
                  {" "}
                  <h3 className="label">Order Number</h3>
                </label>
              </div>
              <input type="text" id="orderNum" className="input" required />
            </div>
          </div>
          <div className="col">
            <div>
              <label htmlFor="subject">
                {" "}
                <h3 className="label">Subject</h3>
              </label>
            </div>
            <input type="text" id="subject" className="input" required />
          </div>
          <div className="col">
            <div>
              <label htmlFor="txt">
                {" "}
                <h3 className="label">Message</h3>
              </label>
            </div>
            <textarea id="message" className="txt input"></textarea>
          </div>
          <div className="col">
            <input type="submit" value="Submit" className="submit-btn" />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
