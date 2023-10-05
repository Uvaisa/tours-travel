import React, { useState, createContext, Children } from "react";
import transportData from "../assets/data/transportData";
import "./Transport.css";

import { GiCommercialAirplane } from "react-icons/gi";
import { MdTrain } from "react-icons/md";
import { BsFillBusFrontFill } from "react-icons/bs";

export const Transport = ({
  transport,
  setTransportPrice,
  setLeavingCity,
  setTransportation,
}) => {
  //console.log(transport);
  const citynames = Object.keys(transport || {});
  //console.log(citynames);

  const [selectCity, setSelectCity] = useState("");
  const [selectCityData, setSelectCityData] = useState("");

  // const [transportPrice, setTransportPrice] = useState(1);
  const handleCity = (e) => {
    e.preventDefault();
    setSelectCity(e.target.value);
    setLeavingCity(e.target.value);
    setSelectCityData(transport[e.target.value]);
  };
  // console.log(selectCityData);
  const transportMode = Object.keys(selectCityData || {});
  // console.log(transportMode);

  const show = (e, p, m) => {
    e.preventDefault();
    //console.log("from transport file" + p);
    setTransportPrice(p);
    setTransportation(m);
  };

  // console.log("transportPrice" + transportPrice);

  return (
    <>
      <div className="transport-css">
        <h1 className="heading1-css">
          Select Transportation Mode & Pick Up City
        </h1>
        <div className="input-group mb-3">
          <label className="input-group-text" for="inputGroupSelect01">
            Options
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            defaultValue={"delhi"}
            value={selectCity}
            onChange={handleCity}
          >
            <option value="" disabled>
              select city from where you want to travel
            </option>

            {citynames.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <form>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <GiCommercialAirplane style={{ width: "40px", height: "40px" }} />

            <h2 className="price">By {transportMode[0]} </h2>
            <h2 className="price">Rs {selectCityData.air}</h2>
            <button
              className="btn butn-t"
              type="submit"
              onClick={(e) => show(e, selectCityData.air, transportMode[0])}
            >
              select
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MdTrain style={{ width: "45px", height: "50px" }} />

            <h2 className="price">By {transportMode[1]} </h2>
            <h2 className="price">Rs {selectCityData.rail}</h2>
            <button
              className="btn butn-t"
              type="submit"
              onClick={(e) => show(e, selectCityData.rail, transportMode[1])}
            >
              select
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <BsFillBusFrontFill style={{ width: "40px", height: "35px" }} />
            </div>
            <h2 className="price">By {transportMode[2]} </h2>
            <h2 className="price">Rs {selectCityData.road}</h2>
            <button
              className="btn butn-t"
              type="submit"
              onClick={(e) => show(e, selectCityData.road, transportMode[2])}
            >
              select
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
