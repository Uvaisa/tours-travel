import React, { useContext, useState } from "react";
import "./tourlist.css";
import { BASE_URL } from "../utils/config";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { AdminAuthContext } from "../content/adminAuthContext.js";
import WelcomeAdmin from "./welcomeAdmin";
import useFetch from "../Component/hooks/useFetch";
const Tourlist = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState("distance");
  const [price, setPrice] = useState("price");
  const [_id, set_id] = useState(0);
  const [desc, setDesc] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState(0);
  const [show, setShow] = useState(true);
  const [photo, setPhoto] = useState("photo");

  const { admin } = useContext(AdminAuthContext);
  const { data: tours } = useFetch(`${BASE_URL}/tours`);
  const getFileName = (filePath) => {
    const parts = filePath.split("\\");
    return parts.pop();
  };
  //console.log(tours);
  //   console.log(loading);
  //   console.log(error);
  // ==============update and delete api===============
  // const [credentials, setCredential] = useState({
  //   title: undefined,
  //   city: undefined,
  //   country: undefined,
  //   distance: undefined,
  //   price: undefined,
  //   operation: undefined,
  // });
  const handleEdit = (value) => {
    setTitle(value.title);
    setCity(value.city);
    setAddress(value.address);
    setDistance(value.distance);
    setPrice(value.price);
    setDesc(value.desc);
    setMaxGroupSize(value.maxGroupSize);
    setPhoto(value.photo);
    set_id(value._id);
    setShow(false);
    //console.log(value);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const credentials = {
      title,
      city,
      address,
      distance,
      price,
      desc,
      maxGroupSize,
      photo,
    };

    try {
      if (!admin || admin === undefined || admin === null) {
        return alert("please sign in");
      }
      const res = await fetch(`${BASE_URL}/tours/${_id}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      // navigate("/thank-you");
    } catch (error) {
      alert(error.message);
    }
    setShow(true);
    alert("update successfully");
    setTitle("");
    setCity("");
    setAddress("");
    setDistance("");
    setPrice("");
    setDesc("");
    setMaxGroupSize("");
  };
  const handleSave = async (e) => {
    e.preventDefault();
    const credentials = {
      title,
      city,
      address,
      distance,
      price,
      desc,
      maxGroupSize,
      photo,
    };
    try {
      if (!admin || admin === undefined || admin === null) {
        return alert("please sign in");
      }
      let res = await fetch(`${BASE_URL}/tours`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
    } catch (error) {
      alert(error.message);
    }
    alert("tour add successfully");

    setTitle("");
    setCity("");
    setAddress("");
    setDistance("");
    setPrice("");
    setDesc("");
    setMaxGroupSize("");
    setPhoto("");
  };
  const handleDelete = async (i) => {
    console.log(i);
    try {
      if (!admin || admin === undefined || admin === null) {
        return alert("please sign in");
      }
      const res = await fetch(`${BASE_URL}/tours/${i}`, {
        method: "delete",
      });
      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }
    } catch (error) {
      alert(error.message);
    }
    alert("tour deleted successfully");
  };
  return (
    <>
      <WelcomeAdmin />
      <h1 className="topHead-css">Tour List</h1>
      <section>
        <Container>
          <Row>
            <Col lg="9">
              <div className="table-css">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>City</th>
                      <th>Country</th>
                      <th>Distance</th>
                      <th>Price</th>
                      <th>Descrip</th>
                      <th>maxGsize</th>
                      <th>photo</th>
                      <th style={{ width: "162px" }}>Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tours.map((value, key) => (
                      <tr key={value._id}>
                        <td>{value.title}</td>
                        <td>{value.city}</td>
                        <td>{value.address}</td>
                        <td>{value.distance}</td>
                        <td>${value.price}</td>
                        <td>{value.desc}</td>
                        <td>{value.maxGroupSize}</td>
                        <td>{value.photo}</td>
                        <td>
                          <button
                            className="btns"
                            onClick={() => handleEdit(value)}
                          >
                            Edit
                          </button>
                          <button
                            style={{ marginLeft: "5px" }}
                            className="btns"
                            onClick={() => handleDelete(value._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>

            <Col lg="3">
              <div className="form">
                {show ? (
                  <h5>Add Tour Details</h5>
                ) : (
                  <h5>Update Tour Details</h5>
                )}

                <Form className="info-form">
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Title"
                      value={title}
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    ></input>
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="City"
                      value={city}
                      required
                      onChange={(e) => setCity(e.target.value)}
                    ></input>
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Country"
                      value={address}
                      required
                      onChange={(e) => setAddress(e.target.value)}
                    ></input>
                  </FormGroup>
                  <FormGroup className="d-flex align-items-center gap-3">
                    <input
                      type="number"
                      placeholder="Distance"
                      value={distance}
                      required
                      onChange={(e) => setDistance(e.target.value)}
                    ></input>
                    <input
                      type="number"
                      placeholder="Price"
                      value={price}
                      required
                      onChange={(e) => setPrice(e.target.value)}
                    ></input>
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="description"
                      value={desc}
                      required
                      onChange={(e) => setDesc(e.target.value)}
                    ></input>
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="number"
                      placeholder="Maximum group size"
                      value={maxGroupSize}
                      required
                      onChange={(e) => setMaxGroupSize(e.target.value)}
                    ></input>
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="file"
                      placeholder="photo"
                      accept=".png"
                      required
                      onChange={(e) => setPhoto(getFileName(e.target.value))}
                    ></input>
                  </FormGroup>

                  {show ? (
                    <button className="update-btn" onClick={handleSave}>
                      Add Tour
                    </button>
                  ) : (
                    <button className="update-btn" onClick={handleUpdate}>
                      Update
                    </button>
                  )}
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Tourlist;
