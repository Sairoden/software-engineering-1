import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { UserContext } from "../../Context/UserContext";

const Profile = () => {
  const { setUser, firstName, lastName } = useContext(UserContext);

  return (
    <>
      <div className="profile">
        <div className="heading">My Account</div>
        <div className="sub-heading text-center">
          Welcome Back!
          <span>{" " + firstName + " " + lastName}</span>
        </div>
        <div className="body">
          <div className="row ">
            <div className="col">
              <div className="label">My Orders</div>
              <hr />
            </div>
            <div className="col">
              <div className="label">Primary Address</div>
              <hr />
              <Link to="address">
                <button className="submit-btn">Edit Address</button>
              </Link>
            </div>
          </div>
        </div>
        <button onClick={() => setUser(false)} className="submit-btn">
          LOG OUT
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
