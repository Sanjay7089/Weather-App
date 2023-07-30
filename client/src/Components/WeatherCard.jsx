import React from "react";
//icon
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CompressOutlinedIcon from "@mui/icons-material/CompressOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
const WeatherCard = ({ city, temp, pressure, humidity, wind }) => {
  return (
    <>
      <div className="weather-cloud">
        <WaterDropOutlinedIcon sx={{ fontSize: 50 }} />{" "}
      </div>

      <div className="weather-city">
        <h1> {"Indore"} </h1>
      </div>
      <div class="weather-row">
        <div class="weather-column">
          <LightModeOutlinedIcon />
          <p>Temp: {(500 - 273.15).toFixed(2)} "C</p>
        </div>
        <div class="weather-column">
          <CompressOutlinedIcon />
          <p>Pressure: {"high"}</p>
        </div>
      </div>
      <div class="weather-row">
        <div class="weather-column">
          <CloudOutlinedIcon />
          <p>Humidity: {"humid"}</p>
        </div>
        <div class="weather-column">
          <AirOutlinedIcon />
          <p>Wind: {1.22}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
