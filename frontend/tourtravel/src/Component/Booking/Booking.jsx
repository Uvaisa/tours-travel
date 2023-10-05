import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../content/AuthContext";
import { BASE_URL } from "../../utils/config";

export const Booking = ({
  tour,
  avgRating,
  transportPrice,
  hotelPrice,
  transportation,
  hotelName,
  leavingCity,
}) => {
  // const {
  //   avgRating,
  //   transportPrice,
  //   hotelPrice,
  //   hotelName,
  //   leavingCity,
  //   transportation,
  // } = props;

  const { price, reviews, title } = tour;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  // console.log("transport Price from booking file " + transportPrice);
  // console.log("hotel Price from booking file " + hotelPrice);
  // console.log("hotel name from booking file " + hotelName);
  // console.log("city name from booking file " + leavingCity);
  // console.log("transportation name from booking file " + transportation);
  //const [totalAmount, setTotalAmount] = useState(1);
  // console.log(transportation, hotelName, leavingCity);
  const [booking, setBooking] = useState({
    userId: user && user._id,
    username: user && user.username,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
    transportation,
    hotelName,
    leavingCity,
  });

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) +
    Number(serviceFee) +
    Number(transportPrice) * Number(booking.guestSize) +
    Number(hotelPrice) * Number(booking.guestSize);
  const handleChange = (e) => {
    setBooking((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  //send data to the server
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(booking);

    try {
      if (!user || user === undefined || user === null) {
        return alert("please sign in");
      }
      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });
      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      // navigate("/thank-you");
      navigate("/payment");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
          <h3>
            Rs{price}
            <span> /per person</span>
          </h3>
          <span className="tour__rating d-flex align-items-center ">
            <AiFillStar className="ab" />
            {avgRating === 0 ? null : avgRating}({reviews?.length})
          </span>
        </div>
        {/* ===============Booking Form =================== */}
        <div className="booking__form">
          <h5>information</h5>
          <Form className="booking__info-form" onSubmit={handleClick}>
            <FormGroup>
              <input
                type="text"
                placeholder="Full Name"
                id="fullName"
                required
                onChange={handleChange}
              ></input>
            </FormGroup>
            <FormGroup>
              <input
                type="phone"
                placeholder="phone"
                id="phone"
                required
                onChange={handleChange}
              ></input>
            </FormGroup>
            <FormGroup className="d-flex align-items-center gap-3">
              <input
                type="date"
                placeholder="Full Name"
                id="bookAt"
                required
                onChange={handleChange}
              ></input>
              <input
                type="number"
                placeholder="Guest"
                id="guestSize"
                required
                onChange={handleChange}
              ></input>
            </FormGroup>
          </Form>
        </div>

        {/* ===============Booking Form=================== */}
        {/* ===============Booking bottom start=================== */}
        <div className="booking__bottom">
          <ListGroup>
            <ListGroupItem className="border-0 px-0">
              <h5 className="d-flex align-items-center gap-1">
                Rs {price} <AiOutlineClose /> {booking.guestSize} person{" "}
              </h5>
              <span>Rs {price * booking.guestSize}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0">
              <h5>Hotel charge= Rs {hotelPrice}/perhead</h5>
              <span>Rs {hotelPrice * booking.guestSize}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0">
              <h5>Transport charge= Rs {transportPrice}/perhead</h5>
              <span>Rs {transportPrice * booking.guestSize}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0">
              <h5>Service charge</h5>
              <span>Rs {serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0 total">
              <h5>Total</h5>
              <span>Rs {totalAmount}</span>
            </ListGroupItem>
          </ListGroup>
          <button className="butn" onClick={handleClick}>
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};
// tour,
// avgRating,
// transportPrice,
// hotelPrice,
// transportation,
// hotelName,
// leavingCity,
