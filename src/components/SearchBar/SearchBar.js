import React from "react";

const SearchBar = ({ setWeatherData }) => {
  let city = undefined;

  const getCity = (e) => {
    city = e.target.value;
  };

  return (
    <div>
      <input type="text" onChange={getCity} />
      <button
        onClick={() => {
          setWeatherData((data) => ({ ...data, ...{ city: city } }));
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
