import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="notice">
        <div className="box">
          <FontAwesomeIcon icon={faShippingFast} className="icon" />
          <div className="heading">Shipping Delay Notice</div>
          <div className="sub-heading">
            Due to Covid delays, orders may take 2 - 3 weeks to arrive. We hope
            you still love us.
          </div>
          <div className="sub-heading">
            <strong>(づ｡◕‿‿◕｡)づ</strong>
          </div>
        </div>
      </div>
      <div className="foot">
        <div className="box">
          <div className="col">
            <p className="sub-heading">Quick Link</p>
            <div className="links">
              <Link to="/shipping-and-returns-refund-policy">
                Shipping Info
              </Link>
              <Link to="/pages/contact-us">Help Center</Link>
              <Link to="/policies/refund-policy">Refund Policy</Link>
              <Link to="/policies/privacy-policy">Privacy Policy</Link>
              <Link to="/policies/terms-of-service">Terms of Service</Link>
            </div>
          </div>
          <div className="col">
            <p className="sub-heading">Follow Us</p>
            <div className="links">
              <Link to="/" className="box_item link">
                {" "}
                <FontAwesomeIcon icon={faFacebookF} className="icon" /> Facebook
              </Link>
              <Link to="/" className="box_item link">
                <FontAwesomeIcon icon={faInstagram} className="icon" />{" "}
                Instagram
              </Link>
            </div>
          </div>
          <div className="col">
            <p className="sub-heading">Company</p>
            <div className="links">
              <Link to="">Shipping Info</Link>
              <Link to="">About Isekai</Link>
              <Link to="">For Business</Link>
              <Link to="">Merchandise Partner</Link>
              <Link to="">Careers</Link>
            </div>
          </div>
          <div className="col">
            <p className="sub-heading">Contact Us</p>
            <div className="links">
              <p>
                94 Kamuning Road Interweave Building Brgy. Kamuning, Quezon City
                1103
              </p>
              <p>isekai@gmail.com</p>
              <p>0915 418 2976</p>
            </div>
          </div>
        </div>
        <div className="box">
          <p className="copyright">
            Copyright © 2022 by Isekai, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
