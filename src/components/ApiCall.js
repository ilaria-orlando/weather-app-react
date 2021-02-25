import React, {useState} from 'react';


//import Form from "./Form";


const axios = require('axios').default;

const ApiCall = ({form}) => {

    const city = form.city
    //const [longLat, setLongLat] = useState({long: "", lat: ""})


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

        console.log(secondresponse)

    }


    return(
        <div>
            <button onClick={call} type="button" id="run">Go!</button>
        </div>
    )

}

export default ApiCall