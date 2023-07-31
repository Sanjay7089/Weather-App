// components
import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import WeatherCard from "../Components/WeatherCard";
import WeatherService from "../services/WeatherService";
const Main = () => {
  const [city, setCity] = useState();
  const [data, fetchData] = WeatherService();
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(city);
    console.log(data);
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
      <WeatherCard />
    </div>
  );
};

export default Main;
