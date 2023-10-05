import React from "react";
import HotelData from "../assets/data/HotelData";
import Hotel from "./Hotel";
import { Col } from "reactstrap";
const HotelList = () => {
  return (
    <>
      {HotelData?.map((item) => (
        <Col lg="3" className="mb-4" key={item.id}>
          <Hotel item={item} />
        </Col>
      ))}
    </>
  );
};

export default HotelList;
