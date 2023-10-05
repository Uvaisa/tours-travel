import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "../shared/SearchBar";
import earth from ".././assets/images/earth.png";
import Subtitle from "../shared/Subtitle";
import i1 from ".././assets/images/i1.jpg";
import i2 from ".././assets/images/i2.png";
import i3 from ".././assets/images/i3.png";
import exImg from "../assets/images/exImg.png";
import exImg2 from "../assets/images/t1.png";
import FeaturedTourList from "../FeaturedTours/FeaturedTourList";
import Testimonial from "../Component/Testimonial/Testimonial";
import MasonryImageGallery from "../Component/ImageGallery/MasonryImageGallery";
import NewsLetter from "../shared/NewsLetter";
import ServiceList from "../services/ServiceList";

const Home = () => {
  return (
    <>
      {/* ======hero section start========= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <h2 className="know-css">Know before you go there</h2>
                  <img src={earth} alt=""></img>
                </div>
                <h1 style={{ width: "575px" }}>
                  traveling open the door to create
                  <span className="highlight"> memories</span>
                </h1>
                <h2>
                  Discover the real value of{" "}
                  <span style={{ color: "rgb(223, 223, 26)" }}>Travel</span>
                </h2>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={i1} alt=""></img>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <img src={i2} alt=""></img>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={i3} alt=""></img>
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ========hero section start========*/}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What We Serve</h5>
              <h2 className="services__title">we offer are best service</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* ========featured tour section start================ */}
      <section>
        <Container>
          <Row>
            <Col
              lg="12"
              className="mb-5"
              style={{ paddingLeft: "100px", paddingTop: "30px" }}
            >
              {/* <Subtitle subtitle={"Explore"} style={{}} /> */}
              <h3 className="subtitle__explore">Explore</h3>
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ========featured tour section end================ */}

      {/* ========experience section start================ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With are all experience
                  <br />
                  we will serve you
                </h2>
                <p>
                  Embark on a journey of a lifetime and explore breathtaking
                  destinations with our exceptional travel experiences. Discover
                  the world's hidden gems, indulge in cultural delights, and
                  create unforgettable memories that will last a lifetime.
                  <br />
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Succeessful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img
                  // src={`http://localhost:4000/view/${}`}
                  src={exImg}
                  alt=""
                ></img>

                <img src={exImg2} alt=""></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========experience section end================ */}

      {/* ========gallery section start================ */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our Customer's tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========gallery section end================ */}
      {/* ========testimonial section start================ */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What are fan say about us</h2>
            </Col>
            <Col>
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========testimonial section end================ */}
      <NewsLetter />
    </>
  );
};

export default Home;
