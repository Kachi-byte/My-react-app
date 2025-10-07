import React, { useState } from "react";
import "./Weatherstyle.css";

const WeatherApp = () => {
  const [temperature, getTemperature] = useState({});
  const [load, userLoading] = useState(false);
  const [city, cityState] = useState("");
  const getWeatherApi = async () => {
      if (!city) return;          
  userLoading(true); 
    try {
 const obtain = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=0962ded7a79698776db0707792833dd3&q=${city}&units=metric`);
      const convertApi = await obtain.json();
      getTemperature(convertApi);
      
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      userLoading(false);
    }
  };

  return (
    <div className="app">
      <h2>WEATHER APP</h2>
      <label>City name</label> <br />
      <input
        type="text"
        id="text"
        placeholder="Add location"
        value={city}
        onChange={(e) => cityState(e.target.value)}
      />{" "}
      <br />
      <br />
      <button onClick={getWeatherApi}>Search</button>
    {load && <p>Loading...</p>}

      {temperature && temperature.main && (
        <div>
          <p>City: {temperature.name}</p>
          <p>Temperature: {temperature.main.temp}°C</p>
          <p>Condition: {temperature.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
