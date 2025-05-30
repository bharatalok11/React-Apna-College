import SearchBox from './SearchBox';
import InfoBox from './InfoBox'
import { useState } from 'react';
export default function WeatherApp(){
    let [weatherInfo ,setWeatherInfo] = useState({
        city : 'Wonderland',
        temp : 25.05,
        feelsLike : 24.05,
        tempMin : 20.05,
        tempMax : 30.05,
        humidity : 50,
        weather : 'Sunny'
    });

    const initWeatherInfo = (result)=>{
        setWeatherInfo(result);
    }
    return(
        <div>
            <h1>Weather app</h1>
            <SearchBox initWeatherInfo={initWeatherInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}