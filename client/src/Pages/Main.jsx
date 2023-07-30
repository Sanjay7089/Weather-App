// components
import SearchBar from "../Components/SearchBar";
import WeatherCard from "../Components/WeatherCard";

const Main = () => {
  return (
    <div className="weather-box">
      <div className="weather-header">
        <h1>Weather App</h1>
      </div>
      <SearchBar />
      <WeatherCard />
    </div>
  );
};

export default Main;
