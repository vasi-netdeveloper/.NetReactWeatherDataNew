import React, { useState, useEffect } from "react";

function WeatherForecast(){
    const [forecasts, setForecasts] = useState([]);

    useEffect(() =>{
        fetch('/weatherforecast')
            .then(r => r.json())
            .then(data => setForecasts(data));
    }, []);

    return(
        <div>
            <h1>Weather App</h1>
            <ul>
                {forecasts.map((forecast, index) => (
                    <li key={index}>
                        {forecast.date}: {forecast.temperatureC} -  { forecast.summary}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WeatherForecast;