import React from "react";
import convertDatetoDay from "../utils/convertDatetoDay";

interface FutureWeatherProps {
    date : string,
    tempMax : number,
    tempMin : number,
    icon : string,
    conditions: string
}

export default function FutureWeather ({date, tempMax, tempMin, icon, conditions} : FutureWeatherProps) {
    return(
        <div className="weather">
            <h1>{convertDatetoDay(date)}</h1>
            <img src={icon} alt={conditions} />
            <div className="temps">
                <div className="temp high">{tempMax}</div>
                <div className="temp low">{tempMin}</div>
            </div>
        </div>
    )
}