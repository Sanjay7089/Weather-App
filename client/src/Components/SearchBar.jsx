import React, { useState } from "react";

const SearchBar = ({ valueCity, main_handleSubmit, main_handleSearch }) => {
  return (
    <div className="weather-search">
      <form>
        <input
          placeholder="Type City..."
          value={valueCity}
          onChange={main_handleSearch}
          classNames="weather-input"
        />
        <button type="Submit" onClick={main_handleSubmit}>
          search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
