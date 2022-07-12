import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div>
      <ul>
        <li>City Name = {weatherData.city}</li>
        <li>Country = {weatherData.country}</li>
        <li>Local Time = {weatherData.localTime}</li>
        <li>Temperature (C) = {weatherData.tempC}</li>
        <li>Temperature (F) = {weatherData.tempF}</li>
        <li>Status = {weatherData.description}</li>
        <li>Icon = {weatherData.iconUrl}</li>
        <li>Wind Speed (Mph) = {weatherData.windSpeedMph}</li>
        <li>Wind Speed (Kph) = {weatherData.windSpeedKph}</li>
        <li>Humidity = {weatherData.humidity}</li>
        <li>Real Feel Temp (C) = {weatherData.feelTempC}</li>
        <li>Real Feel Temp (F) = {weatherData.feelTempF}</li>
        <li>UV Rating = {weatherData.uv}</li>

        <img alt="weather" />
      </ul>
    </div>
  );
};

export default WeatherDisplay;
