import { useState, useEffect } from "react";
import "./App.css";
import FetchData from "./components/FetchData/FetchData";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import "./normalize.css";
function App() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <div className="App">
      <NavBar setWeatherData={setWeatherData} />
      <FetchData weatherData={weatherData} setWeatherData={setWeatherData} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;
