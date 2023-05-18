import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Time_Zone_Validator.css";

const apiKey = "YOUR API KEY"; //PLEASE use your API KEY as my API KEY IS limited you can find your API KEY from "https://app.abstractapi.com/api/timezone/tester"
const timeZoneUrl = "https://timezone.abstractapi.com/v1/current_time/";

const TimezoneValidation = () => {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value.trim());
  };

  const validateTimeZone = () => {
    if (!location) {
      setResult("Please enter a location.");
      return;
    }

    const url = `${timeZoneUrl}?api_key=${apiKey}&location=${encodeURIComponent(
      location
    )}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setResult(data.error);
        } else {
          console.log(data);
          setResult(`The time zone for ${location} is ${data.datetime}.`);
        }
      })
      .catch((error) => {
        setResult("An error occurred while validating time zone.");
        console.error(error);
      });
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/Categories");
  };
  return (
    <div className="TimeZone_bckgnd">
      <img src="Timezone.jpg" alt="Timezone_image"/>
      <div className="TimeZone">
        <h1>Time Zone Validation</h1>
        <br/>
        <br/>
        <div>
          <label htmlFor="location-input">Enter a location:</label>
          <input
            type="text"
            id="location-input"
            value={location}
            onChange={handleLocationChange}
            placeholder="Oxford, United Kingdom"
          />
        </div>
        <br/>
        <br/>
        <div>
          <button onClick={validateTimeZone}>Validate Time Zone</button>
        </div>
        <br/>
        <br/>
        <div id="validation-result">{result}</div>
        <div>
        <br/>
        <br/>
          <button className="backbtn" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimezoneValidation;
