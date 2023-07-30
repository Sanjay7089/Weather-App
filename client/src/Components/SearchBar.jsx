import React, { useState } from "react";

const SearchBar = () => {
  const [city, setCity] = useState("Indore");
  const handleSubmit = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="weather-search">
      <form>
        <input
          placeholder="Type City..."
          value={city}
          onChange={handleSubmit}
          classNames="weather-input"
        />
        <button type="Submit" >search</button>
      </form>
    </div>
  );
};

export default SearchBar;
