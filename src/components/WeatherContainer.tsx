import React from 'react';
import { useState, useEffect } from "react";

export default function WeatherContainer () {
    let [weatherData, setWeatherData] = useState<any>([]);
    let [load, setLoad] = useState<boolean>(true);
    let [location, setLocation] = useState<string>("London")
    const getWeatherData = async (location : string) => {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${import.meta.env.VITE_API_KEY}&unitGroup=uk`)
        const data = await response.json();
        setWeatherData(data);
        setLoad(false);
    }

    useEffect(() => {
      getWeatherData(location);
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
                        { load ? (<h1>Loading</h1>) : weatherData.currentConditions.temp}
                    </div>
                </div>
            </div>
        </div>
    )
}