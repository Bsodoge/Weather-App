import React, { ReactElement, useRef } from 'react';
import { useState, useEffect } from "react";
import FutureWeather from './FutureWeather';

export default function WeatherContainer () {
    const [weatherData, setWeatherData] = useState<any>();
    const [futureWeatherData, setFutureWeatherData] = useState<any>();
    const [load, setLoad] = useState<boolean>(true);
    const [location, setLocation] = useState<string>("London");
    const [editMode, setEditMode] = useState<boolean>(false);
    const editBox = useRef<HTMLInputElement | null>(null)
    const toggleEditMode = () => {
        setEditMode(edit => !edit);
    }
    const getWeatherData = async (location : string) => {
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${import.meta.env.VITE_API_KEY}&unitGroup=uk`)
            const data = await response.json();
            setLocation(data.address.toLowerCase());
            setWeatherData(data.currentConditions);
            setFutureWeatherData(data.days.slice(1,6))
            setLoad(false);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    const changeLocation = (location : string) =>{
        if((location || location.trim().length)){
            toggleEditMode();
            getWeatherData(location);
        }
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
                    { editMode ? <input className='edit' ref={editBox} defaultValue={location} onKeyDown={(e) => {if(e.key === 'Enter') changeLocation(editBox.current!.value)}}></input> : <h2 data-testid="location" className='location' onDoubleClick={toggleEditMode}>{location}</h2>}
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