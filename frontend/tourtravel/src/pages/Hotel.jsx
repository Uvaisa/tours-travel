import React, { useState } from "react";
import HotelData from "../assets/data/HotelData";
import { CardBody, Col } from "reactstrap";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import "./Hotel.css";

const Hotel = ({ hotel, setHotelPrice, setHotelName }) => {
  const handleMoney = (e, p, h) => {
    e.preventDefault();
    // console.log(p);
    setHotelPrice(p);
    setHotelName(h);
  };

  return (
    <>
      <div className="hotel-css">
        <h1 className="heading-css">Near By Hotels</h1>
        {hotel?.map((item) => (
          <Col
            lg="5"
            className="mb-4"
            style={{ display: "inline-block", margin: "30px" }}
            key={item.Hid}
          >
            <div className="hotel__img">
              <img
                style={{ width: "307px", height: "190px" }}
                src={`http://localhost:4000/view/${item.photo}`}
                //src={item.photo}
                alt="hotel-image"
              ></img>
            </div>
            <form>
              {" "}
              <CardBody className="card__body">
                <div className="card__top d-flex align-items-center justify-content-between">
                  <h5 className="hotel__title">{item.name}</h5>

                  <span className="hotel__rating d-flex align-items-center gap-1">
                    <AiOutlineStar />
                    {<span>({item.rating})</span>}
                  </span>
                </div>
                <span className="hotel__location d-flex align-items-center gap-1">
                  <FiMapPin />
                  {item.address}
                </span>
                <div
                  className="card__bottom d-flex align-items-between mt-3"
                  style={{ width: "310px" }}
                >
                  <h5 style={{ width: "190px", paddingTop: "6px" }}>
                    Rs{item.price}
                  </h5>
                  {/* <button className="btn booking__btn" style={{ marginLeft: "0" }}>
                       <Link to={`/tours/${_id}`}>Book Now</Link>
                   </button> */}
                  <button
                    className="btn booking__btn"
                    style={{ marginLeft: "-5px" }}
                    type="submit"
                    onClick={(e) => handleMoney(e, item.price, item.name)}
                  >
                    Select Hotel
                  </button>
                </div>
              </CardBody>
            </form>
          </Col>
        ))}
      </div>
    </>
  );
};

export default Hotel;
