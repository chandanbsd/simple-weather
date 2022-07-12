import React from "react";

const FetchData = ({ weatherData, setWeatherData }) => {
  const getData = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    if (weatherData?.city) {
      fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${weatherData.city}`,
        options
      )
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
