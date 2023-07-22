import React from 'react';
import { useState, useEffect } from "react";
import FutureWeather from './FutureWeather';

export default function WeatherContainer () {
    let [weatherData, setWeatherData] = useState<any>();
    let [futureWeatherData, setFutureWeatherData] = useState<any>();
    let [load, setLoad] = useState<boolean>(true);
    let [location, setLocation] = useState<string>("London")
    const getWeatherData = async (location : string) => {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${import.meta.env.VITE_API_KEY}&unitGroup=uk`)
        const data = await response.json();
        setWeatherData(data);
        setFutureWeatherData(data.days.slice(1,6))
        setLoad(false);
        console.log(data);
    }

    useEffect(() => {
      getWeatherData(location);
    }, [])    
    return (
        <div className="weather-container">
            <img className='curr-weather-icon' src="" alt={load ? "loading" :weatherData.currentConditions.conditions} />
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
            { 
                load ? (<h1>Loading</h1>) : futureWeatherData.map((day : any) => <FutureWeather date={day.datetime} tempMax={day.tempmax} tempMin={day.tempmin} icon={day.icon} conditions={day.conditions}/>)
            }
        </div>
    )
}