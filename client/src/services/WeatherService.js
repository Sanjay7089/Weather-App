import axios from "axios";
import { useState } from "react";

const WeatherService = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async (city) => {
    try {
      const response = await axios.get(`http://localhost:8000/${city}`);
      setData(response.data);
    } catch (err) {
      const errorMessage = "Error: " + err.message;
      setError(errorMessage);
      console.log(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return "Loading...";
  if (error) return error;

  return [data, fetchData];
};

export default WeatherService;
