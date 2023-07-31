import { useState } from "react";
import axios from "axios";
const WeatherService = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function fetchData(city) {
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
  }

  return { data, fetchData };
};

export default WeatherService;
