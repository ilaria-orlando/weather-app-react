import React, {useState} from 'react';


//import Form from "./Form";
import WeatherToday from "./WeatherToday";


const axios = require('axios').default;



const ApiCall = ({form}) => {

    const city = form.city
    const [currentWeather, setCurrentWeather] = useState({currentTemp: "", weather: "", wind: "", icon: ""})
    const [forecastTemp, setForecastTemp] = useState({day1: "", day2: "", day3: "", day4: "", day5: ""})
    //const [forecastWeather, setForecastWeather] = useState({day1: "", day2: "", day3: "", day4: "", day5: ""})
    //const [forecastIcon, setForecastIcon] = useState({day1: "", day2: "", day3: "", day4: "", day5: ""})
    //const [longLat, setLongLat] = useState({long: "", lat: ""})

    console.log(currentWeather)
    const call = async () => {


        const firsturl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=5&appid=${API_KEY}`
        const firstrequest = axios.get(firsturl)
        const firstresponse = await firstrequest

        const long = firstresponse.data.city.coord.lon
        const lat = firstresponse.data.city.coord.lat


        if(firstresponse){

            callSecond(long, lat)

        }


    }

    const callSecond = async (long, lat) =>{

        const secondurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=hourly,minutely&appid=${API_KEY}`
        const secondrequest = axios.get(secondurl)
        const secondresponse = await secondrequest

        // current temperature
        const currentTemp = Math.round(secondresponse.data.current.temp)
        const current = secondresponse.data.daily[0].weather[0].description
        const currentWind = secondresponse.data.current.wind_speed;
        const currentIcon = secondresponse.data.current.weather[0].icon

        setCurrentWeather({...currentWeather, currentTemp:currentTemp, weather:current, wind:currentWind, icon:currentIcon })

        //daily temperature
        const tempDay1 = Math.round(secondresponse.data.daily[0].temp.day)
        const tempDay2 = Math.round(secondresponse.data.daily[1].temp.day)
        const tempDay3 = Math.round(secondresponse.data.daily[2].temp.day)
        const tempDay4 = Math.round(secondresponse.data.daily[3].temp.day)
        const tempDay5 = Math.round(secondresponse.data.daily[4].temp.day)

        setForecastTemp({...forecastTemp, day1:tempDay1, day2:tempDay2, day3:tempDay3, day4:tempDay4, day5:tempDay5})

        console.log(forecastTemp)


    }


    return(
        <div>
            <button onClick={call} type="button" id="run">Go!</button>
            <WeatherToday currentWeather={currentWeather} />
        </div>
    )

}

export default ApiCall