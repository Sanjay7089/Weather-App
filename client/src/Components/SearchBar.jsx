import React from "react";

const SearchBar = ({ valueCity, main_handleSubmit, main_handleSearch }) => {
  return (
    <div className="weather-search">
      <div className="weather-input">
        <form>
          <input
            placeholder="Type City..."
            value={valueCity}
            onChange={main_handleSearch}
          />
          <button type="Submit" onClick={main_handleSubmit}>
            search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
