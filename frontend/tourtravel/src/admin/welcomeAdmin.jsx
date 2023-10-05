import React from "react";
import "./tourlist.css";
import { NavLink } from "react-router-dom";
const WelcomeAdmin = () => {
  return (
    <>
      <div className="head-css">
        <button className="botn-css">
          <NavLink className="link-css" to="/tourlist">
            Tour List
          </NavLink>
        </button>
        <button className="botn-css">
          <NavLink className="link-css" to="/userlist">
            User List
          </NavLink>
        </button>
        <button className="botn-css">
          <NavLink className="link-css" to="/bookinglist">
            Booking List
          </NavLink>
        </button>
        <button className="botn-css">
          <NavLink className="link-css" to="/paymentlist">
            Payment List
          </NavLink>
        </button>
      </div>
    </>
  );
};

export default WelcomeAdmin;
