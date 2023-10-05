import React from "react";
import "./newsletter.css";
import n1 from "../assets/images/n1.png";
import { Container, Row, Col } from "reactstrap";
const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful travelling information</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="enter your email"></input>
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                hello my name i s mohd Uvais and i am currently persuing MCA
                from Aligarh Muslim University
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img
                src={n1}
                alt=""
                style={{
                  width: " 380px",
                  height: " 370px",
                  marginLeft: " 132px",
                }}
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
