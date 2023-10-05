import React from "react";
import "./Profile.css";
import { Container, Card } from "reactstrap";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { FaPassport } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navi = useNavigate();
  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data);
  const home = () => {
    navi("/");
  };
  return (
    <>
      <Container>
        <Card className="Card-css">
          <h1 className="head">Hello {data.username}</h1>
          <div className="div">
            <div className="icons-div">
              <FaUserAlt className="icons" />
              <MdEmail className="icons" />
              <AiFillPhone className="icons" />
              <FaPassport className="icons" />
            </div>
            <div className="div-label">
              <label className="label">Email</label>
              <label className="label">User Name</label>
              <label className="label">Phone Number</label>
              <label className="label">Aadhar Number</label>
            </div>{" "}
            <div className="value-div">
              <span className="value">{data.email}</span>
              <span className="value">{data.username}</span>
              <span className="value">{data.phoneNo}</span>
              <span className="value">{data.aadharNo}</span>
            </div>
          </div>
          <button type="button" className="back-btn" onClick={home}>
            Back To Home
          </button>
        </Card>
      </Container>
    </>
  );
};

export default Profile;
