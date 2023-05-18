import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./weather_api.css";

function WeatherAPI() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState(null);
  const [showResult, setShowResult] = useState(false); // added state to control visibility of result
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/Categories");
  };

  function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "YOUR API KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.cod === "404") {
          setError("City not found!");
          setWeatherInfo(null);
          setShowResult(false); // hide the result on error
          return;
        }
        const weather = data.weather[0].description;
        const temp = data.main.temp;
        const feelsLike = data.main.feels_like;
        setWeatherInfo({
          city: city,
          weather: weather,
          temp: temp,
          feelsLike: feelsLike,
        });
        setError(null);
        setShowResult(true); // show the result on success
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred while fetching weather data can you please check if weather is entered or not.");
        setWeatherInfo(null);
        setShowResult(false); // hide the result on error
      });
  }

  return (
    <div className="Weather">
      <h1>Weather App</h1>
      <input type="text" id="city" placeholder="Enter City" />
      <button onClick={getWeather}>Get Weather</button>
      {error ? (
        <div id="result">{error}</div>
      ) : (
        <div id="result" style={{ display: showResult ? "block" : "none" }}>
          {weatherInfo && (
            <div>
              <h2>{weatherInfo.city} Weather</h2>
              <p>Current weather: {weatherInfo.weather}</p>
              <p>Temperature: {weatherInfo.temp} &#8451;</p>
              <p>Feels like: {weatherInfo.feelsLike} &#8451;</p>
            </div>
          )}
        </div>
      )}
      <div>
        <button className="backbtn" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default WeatherAPI;