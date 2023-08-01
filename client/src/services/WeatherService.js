import { useEffect, useState } from "react";
import axios from "axios";
const WeatherService = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData({
          ...data,
          temp: res.data.main.temp,
          name: res.data.name,
          humidity: res.data.main.humidity,
          pressure: res.data.main.pressure,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return { data };
};

export default WeatherService;
