import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/tt1.png";
import { BsYoutube } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col lg="3">
          <div className="logo">
            <img src={logo} style={{ width: "50px", height: "50px" }} alt="" />

            <p>we give you the best tour packages on reasonable price.</p>
            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to="#">
                  <BsYoutube />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <AiFillFacebook />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <AiFillInstagram />
                </Link>
              </span>
            </div>
          </div>
        </Col>
        <Col lg="3">
          <h5 className="footer__link-title">Discover</h5>
          <ListGroup className="footer__quick-links">
            {quick__links.map((item, index) => (
              <ListGroupItem key={index} className="ps-0 border-0">
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col lg="3">
          <h5 className="footer__link-title">Quick Links</h5>
          <ListGroup className="footer__quick-links">
            {quick__links2.map((item, index) => (
              <ListGroupItem key={index} className="ps-0 border-0">
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col lg="3">
          <h5 className="footer__link-title">Contact</h5>
          <ListGroup className="footer__quick-links">
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className="mb-0  d-flex align-items-center gap-2">
                <span>
                  <FiMapPin />
                </span>
                Address
              </h6>
              <p className="mb-0">Seohara,Bijnore</p>
            </ListGroupItem>

            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className="mb-0  d-flex align-items-center gap-2">
                <span>
                  <AiOutlineMail />
                </span>
                Email
              </h6>
              <p className="mb-0">mduvais667@gmail.com</p>
            </ListGroupItem>

            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className="mb-0  d-flex align-items-center gap-2">
                <span>
                  <AiFillPhone />
                </span>
                Phone
              </h6>
              <p className="mb-0">7830433641</p>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg="12 " className="text-center pt-5">
          <p className="copyright">
            Copyright {year}, design and develop by Mohd Uvais. All rights
            reserved{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
