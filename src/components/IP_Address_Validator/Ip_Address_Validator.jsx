import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Ip_Address_Validator.css";

const IPAddressValidator = () => {
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [error, setError] = useState("");

  const getGeolocation = () => {
    const ip = document.getElementById("ip").value;
    const apiKey = "YOUR API KEY";  //PLEASE use your API KEY as my API KEY IS limited you can find your API KEY from "https://app.ipgeolocation.io/"
    const url =
      "https://ipgeolocation.abstractapi.com/v1/?api_key=" +
      apiKey +
      "&ip_address=" +
      ip;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found.");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCity(data.city);
        setRegion(data.region);
        setCountry(data.country);
        setLatitude(data.latitude);
        setLongitude(data.longitude);
        setError("");
      })
      .catch((error) => {
        setCity("");
        setRegion("");
        setCountry("");
        setLatitude("");
        setLongitude("");
        setError(error.message);
      });
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/Categories");
  };

  return (
    <div className="IP_Address_Validator">
      <div className="container">
        <h1>IP Geolocation</h1>
        <form>
          <label htmlFor="ip">Enter IP address:</label>
          <input
            type="text"
            id="ip"
            name="ip"
            placeholder="Enter IP address..."
          />
          <button type="button" onClick={getGeolocation}>
            Get Geolocation
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        <table id="geolocation">
          <tbody>
            <tr>
              <th>City</th>
              <td id="city">{city}</td>
            </tr>
            <tr>
              <th>Region</th>
              <td id="region">{region}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td id="country">{country}</td>
            </tr>
            <tr>
              <th>Latitude</th>
              <td id="latitude">{latitude}</td>
            </tr>
            <tr>
              <th>Longitude</th>
              <td id="longitude">{longitude}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="backbtn" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default IPAddressValidator;
