import React from "react";

import "./tourlist.css";
import { BASE_URL } from "../utils/config";
import useFetch from "../Component/hooks/useFetch";
import { Container, Row, Col } from "reactstrap";
import WelcomeAdmin from "./welcomeAdmin";

const Paymentlist = () => {
  const { data: paymentlist } = useFetch(`${BASE_URL}/payment`);
  return (
    <>
      <WelcomeAdmin />
      <h1 className="topHead-css">Payment List</h1>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="table-css">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th>Card Holder Name</th>
                      <th>Card Number</th>
                      <th>Expiry Date</th>
                      <th>CVC</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentlist.map((value) => (
                      <tr key={value._id}>
                        <td>{value.username}</td>
                        <td>{value.cardHname}</td>
                        <td>{value.cardNumber}</td>

                        <td>
                          {new Date(value.expiryDate).toLocaleDateString()}
                        </td>
                        <td>{value.cvc}</td>
                        <td>Paid</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Paymentlist;
