import React, { useRef } from "react";
import "./SearchBar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { FiMapPin } from "react-icons/fi";
import { BASE_URL } from "../utils/config";
import { RiGroupLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { RiMapPinTimeLine } from "react-icons/ri";
const SearchBar = () => {
  const locationRef = useRef("");
  const distanceRef = useRef("");
  const maxGroupSizeRef = useRef("");
  const navigate = useNavigate();
  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;
    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("all fields are required!");
    }
    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );
    if (!res.ok) alert("something went wrong");
    const result = await res.json();
    navigate(
      `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
  };
  return (
    <Col lg="12">
      <div className="serch__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <FiMapPin />
              <div>
                <h6>Location</h6>
                <input
                  type="text"
                  placeholder="where are you going?"
                  ref={locationRef}
                ></input>
              </div>
            </span>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <RiMapPinTimeLine />
              <div>
                <h6>Distance</h6>
                <input
                  type="number"
                  placeholder="Distance k/m"
                  ref={distanceRef}
                ></input>
              </div>
            </span>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <RiGroupLine />
              <div>
                <h6>Max People</h6>
                <input
                  type="number"
                  placeholder="0"
                  ref={maxGroupSizeRef}
                ></input>
              </div>
            </span>
          </FormGroup>
          <span className="search__icon" type="submit" onClick={searchHandler}>
            <AiOutlineSearch />
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
