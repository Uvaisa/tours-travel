import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/tourDetails.css";
import Payment from "../Payment/payment ";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";

import { Transport } from "./Transport";
import { Booking } from "../Component/Booking/Booking";
import NewsLetter from "../shared/NewsLetter";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
import { BiGroup } from "react-icons/bi";
import Hotel from "./Hotel";
import { RiMapPinTimeLine } from "react-icons/ri";
import a1 from "../assets/images/a1.png";
import useFetch from "../Component/hooks/useFetch";
import { BASE_URL } from "../utils/config.js";
import { AuthContext } from "../content/AuthContext";

export const TourDetails = () => {
  var { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const [transportPrice, setTransportPrice] = useState(1);
  const [hotelPrice, setHotelPrice] = useState(1);
  const [hotelName, setHotelName] = useState("");
  const [leavingCity, setLeavingCity] = useState("");
  const [transportation, setTransportation] = useState("");
  const { user } = useContext(AuthContext);

  // //this is an static data later we will use our api
  // const tour = tourData.find((tour) => tour.id === id);

  // fetch data from databse
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
  // console.log(tour);
  // destructure properties from tour object
  var {
    title,
    city,
    photo,
    price,
    address,
    maxGroupSize,
    distance,
    desc,
    reviews,
    hotel,
    transport,
  } = tour;
  const totalRating =
    reviews && reviews.reduce((acc, item) => acc + item.rating, 0);

  const avgRating =
    totalRating === 0
      ? ""
      : totalRating === 1
      ? totalRating
      : (totalRating / reviews?.length).toFixed(1);

  //date format
  const options = { day: "numeric", month: "long", year: "numeric" };
  //submit request to the server

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    // alert(`you have given ${tourRating} ratings`);

    //later we will call our api
    try {
      if (!user || user === undefined || user === null) {
        alert("please sign in");
      }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });
      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);
  // console.log("Transport price from tourDetail File " + transportPrice);
  // console.log("Hotel price from tourDetail File " + hotelPrice);
  // console.log("hotel name from tour detail file" + hotelName);
  // console.log("city name from tour detail file" + leavingCity);
  //console.log(transportation);
  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">loading......</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <section>
                  <div className="tour__content">
                    <img src={`http://localhost:4000/view/${photo}`} alt="" />
                    <div className="tour__info">
                      <h2>{title}</h2>
                      <div className="d-flex align-items-center gap-5">
                        <span className="tour__rating d-flex align-items-center gap-1">
                          <AiFillStar className="ab" />
                          {avgRating === 0 ? null : avgRating}
                          {totalRating === 0 ? (
                            "Not rated"
                          ) : (
                            <span>({reviews?.length})</span>
                          )}
                        </span>
                        <span>
                          <FiMapPin className="ab" />
                          {address}
                        </span>
                      </div>
                      <div className="tour__extra-details">
                        <span>
                          <BiMap className="ab" />
                          {city}{" "}
                        </span>
                        <span>
                          <AiOutlineDollarCircle className="ab" />
                          {price}/per person{" "}
                        </span>
                        <span>
                          <RiMapPinTimeLine className="ab" />
                          {distance} k/m
                        </span>
                        <span>
                          <BiGroup className="ab" />
                          {maxGroupSize} people
                        </span>
                      </div>
                      <h5>Describe</h5>
                      <p>{desc}</p>
                    </div>
                    {/* ===================tour review section start================== */}
                    <div className="tour__reviews mt-4">
                      <h4>Review({reviews?.length} reviews)</h4>
                      <Form onSubmit={SubmitHandler}>
                        <div
                          className="d-flex align-items-center gap-3 mb-4 rating__group"
                          style={{}}
                        >
                          <span onClick={() => setTourRating(1)}>
                            1 <AiFillStar />
                          </span>
                          <span onClick={() => setTourRating(2)}>
                            2 <AiFillStar />
                          </span>
                          <span onClick={() => setTourRating(3)}>
                            3 <AiFillStar />
                          </span>
                          <span onClick={() => setTourRating(4)}>
                            4 <AiFillStar />
                          </span>
                          <span onClick={() => setTourRating(5)}>
                            5 <AiFillStar />
                          </span>
                        </div>

                        <div className="review__input">
                          <input
                            type="text"
                            ref={reviewMsgRef}
                            placeholder="share your thought"
                            required
                          />
                          <button
                            className="btn primary__btn text-white"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </Form>
                      <ListGroup className="user__reviews">
                        {reviews?.map((review) => (
                          <div className="review__item">
                            <img src={a1} alt="" />
                            <div className="w-100" style={{ width: "100%" }}>
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <h5>{review.username}</h5>
                                  <p>
                                    {new Date(
                                      review.createdAt
                                    ).toLocaleDateString("en-US", options)}
                                  </p>
                                </div>
                                <span className="d-flex align-items-center">
                                  {review.rating}
                                  <AiFillStar className="bc" />
                                </span>
                              </div>
                              <h6>{review.reviewText}</h6>
                            </div>
                          </div>
                        ))}
                      </ListGroup>
                    </div>

                    {/* ===================tour review section end================== */}

                    <Hotel
                      hotel={hotel}
                      setHotelPrice={setHotelPrice}
                      setHotelName={setHotelName}
                    />
                    <Transport
                      transport={transport}
                      setTransportPrice={setTransportPrice}
                      setLeavingCity={setLeavingCity}
                      setTransportation={setTransportation}
                    />
                  </div>
                </section>
              </Col>

              <Col lg="4">
                <Booking
                  tour={tour}
                  avgRating={avgRating}
                  transportPrice={transportPrice}
                  hotelPrice={hotelPrice}
                  hotelName={hotelName}
                  leavingCity={leavingCity}
                  transportation={transportation}
                />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};
