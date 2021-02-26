import React from "react"

const WeatherToday = ({currentWeather}) => {

    return(
            <div className="currentweather">
                <img src="#" alt="weather" height="100px" width="100px" id="img" />
                    <div className="weathervalues">
                        <span id="temp">{currentWeather.currentTemp}</span>
                        <div className="flex">
                            <span id="weather">{currentWeather.weather}</span>
                            <span id="wind">{currentWeather.wind}</span>
                        </div>
                    </div>
            </div>
        )


}

export default WeatherToday