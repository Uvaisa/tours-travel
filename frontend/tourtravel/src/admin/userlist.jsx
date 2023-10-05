import React, { useContext, useState } from "react";
import { BASE_URL } from "../utils/config";
import useFetch from "../Component/hooks/useFetch";
import "./tourlist.css";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { AdminAuthContext } from "../content/adminAuthContext";
import WelcomeAdmin from "./welcomeAdmin";
const Userlist = () => {
  const { admin } = useContext(AdminAuthContext);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [id, setId] = useState(0);
  const { data: users } = useFetch(`${BASE_URL}/users`);
  console.log(users);
  //   const show = async () => {
  //     try {
  //       if (!admin || admin === undefined || admin === null) {
  //         return alert("please sign in");
  //       }
  //       const res = await fetch(`${BASE_URL}/users`);
  //       const result = await res.json();
  //       const { data: users } = result;
  //       console.log(users);
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   };
  //   useEffect(() => {
  //     show();
  //   }, []);
  const handleEdit = (value) => {
    if (!admin || admin === undefined || admin === null) {
      return alert("plese login");
    }
    setUserName(value.username);
    setEmail(value.email);
    setId(value._id);
    setPhoneNo(value.phoneNo);
    setAadharNo(value.aadharNo);
  };
  const handleUpdate = async () => {
    const credentials = {
      username,
      email,
      phoneNo,
      aadharNo,
    };
    try {
      if (!admin || admin === undefined || admin === null) {
        return alert("plese login");
      }
      const res = await fetch(`${BASE_URL}/users/${id}`, {
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
    } catch (error) {
      alert(error.message);
    }
    alert("user update successfully");
  };
  const handleDelete = async (i) => {
    try {
      if (!admin || admin === undefined || admin === null) {
        return alert("please login");
      }
      const res = await fetch(`${BASE_URL}/users/${i}`, {
        method: "delete",
      });
      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
    } catch (error) {
      return alert(error.message);
    }
    alert("deleted successfully");
  };

  return (
    <>
      <WelcomeAdmin />
      <h1 className="topHead-css">User List</h1>
      <section>
        <Container>
          <Row>
            <Col lg="9">
              <div className="table-css">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>ID</th>
                      <th>Phone No.</th>
                      <th>Aadhar No.</th>
                      <th>Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((value) => (
                      <tr key={value._id}>
                        <td>{value.username}</td>
                        <td>{value.email}</td>
                        <td>{value._id}</td>
                        <td>{value.phoneNo}</td>
                        <td>{value.aadharNo}</td>

                        <td>
                          <button
                            className="btns"
                            onClick={() => handleEdit(value)}
                          >
                            Edit
                          </button>
                          <button
                            style={{ marginLeft: "10px" }}
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
                <h5>Update Details</h5>

                <Form className="info-form">
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="User Name"
                      value={username}
                      required
                      onChange={(e) => setUserName(e.target.value)}
                    ></input>
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="Numbet"
                      placeholder="Phone No."
                      value={phoneNo}
                      required
                      onChange={(e) => setPhoneNo(e.target.value)}
                    ></input>
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="Number"
                      placeholder="Aadhar No."
                      value={aadharNo}
                      required
                      onChange={(e) => setAadharNo(e.target.value)}
                    ></input>
                  </FormGroup>

                  <button className="update-btn" onClick={handleUpdate}>
                    Update
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Userlist;
