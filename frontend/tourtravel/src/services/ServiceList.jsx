import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import { TiWeatherPartlySunny } from "react-icons/ti";
// import i4 from ".././assets/images/i4.png";
// import i5 from ".././assets/images/i5.png";
// import i6 from ".././assets/images/i6.png";
const serviceData = [
  {
    imgUrl: <TiWeatherPartlySunny />,
    title: "weather",
    desc: " calculate weather before leave ",
  },
  {
    title: "Best Tour guide",
    desc: "we have best tour guide ",
  },
  {
    title: "customization",
    desc: " best customization ",
  },
];
const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
