import React, { useContext, useState } from "react";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../content/AuthContext";

import "./payment.css";
//import atm from "../assets/images/atm.png";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, FormGroup } from "reactstrap";
//import { TotalPayContext } from "../Component/Booking/Booking";
const Payment = () => {
  const { user } = useContext(AuthContext);
  //console.log("total amount from payment file " + totalAmount);
  const [payment, setPayment] = useState({
    username: user.username,
    cardHname: "",
    cardNumber: 0,
    expiryDate: 0,
    cvc: 0,
  });

  const navigate = useNavigate();
  // const { totalAmount } = useContext(TotalPayContext);
  // console.log(totalAmount);
  const changeHandle = (e) => {
    e.preventDefault();
    setPayment((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleClick = async (e) => {
    e.preventDefault();

    console.log(payment);

    try {
      if (!user || user === undefined || user === null) {
        return alert("please sign in");
      }
      const res = await fetch(`${BASE_URL}/payment`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payment),
      });
      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      navigate("/thank-you");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <section>
        <Container className="payment-box">
          <Row>
            <Col>
              {/* <div>
                <img src={atm} alt=" " />
              </div> */}

              <div className="booking__form">
                <h5>Please Enter Card Detail</h5>
                <form className="booking__info-form" onSubmit={handleClick}>
                  <input
                    type="text"
                    placeholder="Card Holder Name"
                    id="cardHname"
                    required
                    onChange={changeHandle}
                  />
                  <FormGroup>
                    <input
                      type="number"
                      placeholder="Card number"
                      id="cardNumber"
                      required
                      onChange={changeHandle}
                    ></input>
                  </FormGroup>

                  <FormGroup className="d-flex align-items-center gap-3">
                    <label style={{ width: "120px" }}>Expiry Date</label>
                    <input
                      type="date"
                      placeholder="Full Name"
                      id="expiryDate"
                      required
                      onChange={changeHandle}
                    ></input>
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="number"
                      placeholder="CVC"
                      id="cvc"
                      required
                      onChange={changeHandle}
                    ></input>
                  </FormGroup>

                  <button type="submit" className="butn">
                    Pay Now
                  </button>
                </form>{" "}
                <div>
                  <button
                    className="butn"
                    style={{ width: "92%", marginLeft: "17px" }}
                    onClick={handleCancel}
                  >
                    Cancel Payment
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Payment;
