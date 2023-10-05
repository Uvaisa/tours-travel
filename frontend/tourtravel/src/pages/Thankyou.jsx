import React from "react";
import "../styles/thankyou.css";
import { TiInputChecked } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Col, Container, Row, Button } from "reactstrap";
const Thankyou = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank__you">
              <span>
                <TiInputChecked className="tag" />
                <h1 className="mb-3 fw-semibold">thank you</h1>
                <h3 className="mb-4">your tour is booked</h3>
                <Button className="btn  w-25">
                  <Link className="ab" to="/home">
                    Back to Home
                  </Link>
                </Button>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Thankyou;
