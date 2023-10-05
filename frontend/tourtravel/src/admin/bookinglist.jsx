import React, { useContext } from "react";
import "./tourlist.css";
import { BASE_URL } from "../utils/config";
import useFetch from "../Component/hooks/useFetch";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { AdminAuthContext } from "../content/adminAuthContext";
import WelcomeAdmin from "./welcomeAdmin";
const Bookinglist = () => {
  const { data: bookinglist, error, message } = useFetch(`${BASE_URL}/booking`);
  return (
    <>
      <WelcomeAdmin />
      <h1 className="topHead-css">Booking List</h1>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="table-css">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th>User Id</th>
                      <th>Tour Name</th>
                      <th>Full Name</th>
                      <th>Guest Size</th>
                      <th>Phone No.</th>
                      <th>Booking Date</th>
                      <th>PickUp city</th>
                      <th>Hotel Name</th>
                      <th>transport</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookinglist.map((value) => (
                      <tr key={value._id}>
                        <td>{value.username}</td>
                        <td>{value.userId}</td>
                        <td>{value.tourName}</td>
                        <td>{value.fullName}</td>
                        <td>{value.guestSize}</td>
                        <td>{value.phone}</td>
                        <td>{new Date(value.bookAt).toLocaleDateString()}</td>
                        <td>{value.leavingCity}</td>
                        <td>{value.hotelName}</td>
                        <td>{value.transportation}</td>
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

export default Bookinglist;
