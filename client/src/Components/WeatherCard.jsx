import React from "react";
//icon
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CompressOutlinedIcon from "@mui/icons-material/CompressOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
const WeatherCard = ({ weatherData }) => {
  console.log(weatherData);
  console.log(weatherData.weather[0].main);
  console.log(weatherData.main.temp);
  console.log(weatherData.wind.speed);
  console.log(weatherData.name);

  return (
    <>
      <div className="weather-cloud">
        <WaterDropOutlinedIcon sx={{ fontSize: 50 }} />{" "}
      </div>

      <div className="weather-city">
        <h1> {weatherData.name} </h1>
      </div>
      <div className="weather-row">
        <div className="weather-column">
          <LightModeOutlinedIcon />
          <p>Temp: {weatherData.main.temp.toFixed(2)} "C</p>
        </div>
        <div className="weather-column">
          <CompressOutlinedIcon />
          {/* Change 800 to some value */}
          <p>Pressure: {weatherData.main.pressure > 800 ? "High" : "Low"}</p>
        </div>
      </div>
      <div className="weather-row">
        <div className="weather-column">
          <CloudOutlinedIcon />
          <p>Humidity: {weatherData.main.humidity}</p>
        </div>
        <div className="weather-column">
          <AirOutlinedIcon />
          <p>Wind: {weatherData.wind.speed}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
