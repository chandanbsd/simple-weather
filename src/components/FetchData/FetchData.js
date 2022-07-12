import React from "react";

const FetchData = ({ weatherData, setWeatherData }) => {
  const getData = () => {
    if (weatherData?.city) {
      fetch(`/.netlify/functions/fetchCall/?q=${weatherData.city}`)
        .then((response) => response.json())
        .then((response) => {
          setWeatherData((data) => ({
            ...data,
            ...{
              country: response.location.country,
              localTime: response.location.localtime,
              tempC: response.current.temp_c,
              tempF: response.current.temp_f,
              description: response.current.condition.text,
              iconUrl: response.current.condition.icon,
              windSpeedMph: response.current.wind_mph,
              windSpeedKph: response.current.wind_kph,
              humidity: response.current.humidity,
              feelTempC: response.current.feelslike_c,
              feelTempF: response.current.feelslike_f,
              uv: response.current.uv,
            },
          }));
        })

        .catch((err) => console.error(err));
    }
  };

  return <button onClick={getData}>Click Me</button>;
};

export default FetchData;
