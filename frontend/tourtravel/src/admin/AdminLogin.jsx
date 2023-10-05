import React, { useContext, useReducer, useState } from "react";
import "../styles/login.css";
import { BASE_URL } from "../utils/config";
import logimage from "../assets/images/logimage.png";
import loginLogo2 from "../assets/images/loginLogo2.png";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AdminAuthContext } from "../content/adminAuthContext";
const AdminLogin = () => {
  const [credential, setCredential] = useState({
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const { dispatched } = useContext(AdminAuthContext);

  const handleChange = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value })); //why we take it like array
  };
  const handleClick = async (e) => {
    e.preventDefault();

    dispatched({ type: "ADMIN_LOGIN_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/adminlogin`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credential),
      });
      const result = await res.json();
      if (!res.ok) alert(result.message);
      console.log(result.data);
      dispatched({ type: "ADMIN_LOGIN_SUCCESS", payload: result.data });
      navigate("/");
    } catch (error) {
      dispatched({ type: "ADMIN_LOGIN_FAILURE", payload: error.message });
    }
  };

  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="8" className="m-auto">
              <div className="login__container d-flex justify-content-between">
                <div className="login__img">
                  <img src={logimage} alt="" />
                </div>
                <div className="login__form">
                  <div className="user">
                    <img src={loginLogo2} className="login__logo" alt="" />
                  </div>
                  <h2> Admin Login</h2>
                  <Form onSubmit={handleClick}>
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
                        type="password"
                        placeholder="  password"
                        required
                        id="password"
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <button className="btna" type="submit">
                      Login
                    </button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AdminLogin;
