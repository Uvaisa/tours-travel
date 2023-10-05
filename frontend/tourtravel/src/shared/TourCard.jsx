import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import calculateAvgRating from "../utils/aveRating";
import "./tourCard.css";

const TourCard = ({ tour }) => {
  const { _id, title, city, photo, price, featured, reviews } = tour;
  const totalRating =
    reviews && reviews.reduce((acc, item) => acc + item.rating, 0);

  //console.log(totalRating, "sdsfsdfs");
  const avgRating =
    totalRating === 0
      ? ""
      : totalRating === 1
      ? totalRating
      : totalRating / reviews?.length;

  return (
    <div>
      <Card>
        <div className="tour__img">
          <img
            style={{ width: "306px", height: "168px" }}
            src={`http://localhost:4000/view/${photo}`}
            alt="tour-image"
          ></img>
          {featured && <span>Featured</span>}
        </div>
      </Card>
      <CardBody className="card__body">
        <div className="card__top d-flex align-items-center justify-content-between">
          <span className="tour__location d-flex align-items-center gap-1">
            <FiMapPin />
            {city}
          </span>
          <span className="tour__rating d-flex align-items-center gap-1">
            <AiOutlineStar />
            {avgRating === 0 ? null : avgRating}
            {totalRating === 0 ? "Not rated" : <span>({reviews.length})</span>}
          </span>
        </div>
        <h5 className="tour__title">
          <Link to={`/tours/${_id}`}>{title}</Link>
        </h5>
        <div
          className="card__bottom d-flex align-items-between mt-3"
          style={{ width: "300px" }}
        >
          <h5 style={{ width: "190px", paddingTop: "6px" }}>
            Rs{price}
            <span>/per person</span>
          </h5>
          <button className="btn booking__btn" style={{ marginLeft: "0" }}>
            <Link to={`/tours/${_id}`}>Book Now</Link>
          </button>
        </div>
      </CardBody>
    </div>
  );
};

export default TourCard;
