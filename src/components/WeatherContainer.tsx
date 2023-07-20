import React from 'react';
import { useState, useEffect } from "react";

export default function WeatherContainer () {
    let [weatherData, setWeatherData] = useState<any>();
    let [location, setLocation] = useState<string>("London")
    const getWeatherData = async (location : string) => {
      try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        console.log(data)
        return data;
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      setWeatherData(getWeatherData(location));
    }, [])    
    return (
        <div className="weather-container">
            <div className="current-weather">
                <div className="left-container">
                    <h1 data-testid="location">{location}</h1>
                    <h2>Hourly</h2>
                </div>
                <div className="right-container">
                    <div className="degrees">
                        2
                    </div>
                </div>
            </div>
        </div>
    )
}