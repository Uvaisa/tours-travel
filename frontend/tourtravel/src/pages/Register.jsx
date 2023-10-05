import React, { useContext, useState } from "react";
import "../styles/login.css";
import logimage from "../assets/images/logimage.png";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../content/AuthContext";
import { BASE_URL } from "../utils/config";
const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
    phoneNo: undefined,
    aadharNo: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);
      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={logimage} alt="" />
              </div>
              <div
                className="login__form"
                style={{
                  padding: "14px",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                }}
              >
                {/* <div className="user">
                  <img src={loginLogo2} className="login__logo" alt="" />
                </div> */}
                <h2 style={{ marginBottom: "10px" }}>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="  Username"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="  Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="Number"
                      placeholder="  Phone Number"
                      required
                      id="phoneNo"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="Number"
                      placeholder="  Aadhar Card Number"
                      required
                      id="aadharNo"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="  password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <button className="btna" type="submit">
                    Create Account
                  </button>
                </Form>
                <p style={{ marginBottom: "2px" }}>
                  Already have an account ? <Link to="/login">Login</Link>{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
