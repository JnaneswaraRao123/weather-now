import React from "react";
import "./WeatherCard.css";

export default function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>
        {weather.city}, {weather.country}
      </h2>
      <p className="temperature">{weather.temp}°C</p>
      <p>💨 Wind: {weather.wind} km/h</p>
    </div>
  );
}
