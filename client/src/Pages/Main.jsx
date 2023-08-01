// components
import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import WeatherCard from "../Components/WeatherCard";
import WeatherService from "../services/WeatherService";

const Main = () => {
  const [city, setCity] = useState("");
  const [url, setUrl] = useState(`http://localhost:8000/${city}`);
  const { data } = WeatherService(url);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(`http://localhost:8000/${city}`);
    setCity("");
  };

  const handleSearch = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="weather-box">
      <div className="weather-header">
        <h1>Weather App</h1>
      </div>
      <SearchBar
        valueCity={city}
        main_handleSubmit={handleSubmit}
        main_handleSearch={handleSearch}
      />

      {data != null ? (
        <WeatherCard weatherData={data} />
      ) : (
        <h1>Search weather by city !</h1>
      )}
    </div>
  );
};

export default Main;
