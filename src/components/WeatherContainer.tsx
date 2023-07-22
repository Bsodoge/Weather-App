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
        setWeatherData(data.currentConditions);
        setFutureWeatherData(data.days.slice(1,6))
        setLoad(false);
        console.log(data);
    }

    useEffect(() => {
      getWeatherData(location);
    }, [])    
    return (
        <div className="weather-container">
            <div className="current-weather-icon">
                <img src={load ? `none` :`src/assets/icons/${weatherData.icon}.svg`} alt={load ? "loading" :weatherData.conditions} />
            </div>
            <div className="current-weather">
                <div className="left-container">
                    <h2 data-testid="location" className='location'>{location}</h2>
                    <h3 className="hourly">Hourly</h3>
                </div>
                <div className="right-container">
                    <div className="degrees">
                        { load ? (<h1>Loading</h1>) : Math.floor(weatherData.temp)}<span className='degrees-symbol'>&#176;</span> 
                    </div>
                </div>
            </div>
            <div className="future-weather-container">
            { 
                load ? (<h2>Loading</h2>) : futureWeatherData.map((day : any) => <FutureWeather date={day.datetime} tempMax={day.tempmax} tempMin={day.tempmin} icon={day.icon} conditions={day.conditions}/>)
            }
            </div>
            <div className="last-fetched">
                <a href="https://www.visualcrossing.com/">
                    <img className='visual-crossing' src="src/assets/icons/Visual_Crossing_Corporation_Logo.png" alt="Visual Crossing Logo" />
                </a>
                <div className="upated"><strong>Updated</strong> {new Date().toLocaleDateString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
                <a href="https://github.com/Bsodoge/Weather-App">
                    <img src="src/assets/icons/github-mark.svg" alt="Github Logo" />
                </a>
            </div>
        </div>
    )
}