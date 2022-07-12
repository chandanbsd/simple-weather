import { useState, useEffect } from "react";
import "./App.css";
import FetchData from "./components/FetchData/FetchData";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";

function App() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <FetchData weatherData={weatherData} setWeatherData={setWeatherData} />
      <SearchBar setWeatherData={setWeatherData} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;
