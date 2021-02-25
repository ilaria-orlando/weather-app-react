import React from 'react';


//import Form from "./Form";

const API_KEY = "6d62f680b47ba0a60f39206b9e1a714a";
const axios = require('axios').default;

const ApiCall = ({form}) => {

    const city = form.city

    const call = async () => {


        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=5&appid=${API_KEY}`
        const request = axios.get(url)
        const response = await request

        console.log(response)


    }


    return(
        <div>
            <button onClick={call} type="button" id="run">Go!</button>
        </div>
    )

}

export default ApiCall