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
        <div className="future-weather">
            <h2 className="day">{convertDatetoDay(date)}</h2>
            <img src={`src/assets/icons/${icon}.svg`} alt={conditions} />
            <div className="temps">
                <div className="temp high">{tempMax}&#176;</div>
                <div className="temp low">{tempMin}&#176;</div>
            </div>
        </div>
    )
}