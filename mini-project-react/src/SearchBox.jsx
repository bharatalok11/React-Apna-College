import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({initWeatherInfo}){
    let [city,setCity] = useState("");
    const [error, setError] = useState(false);
    
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async()=>{
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&APPID=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();
            const result =  {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                feelsLike: jsonResponse.main.feels_like,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                weather: jsonResponse.weather[0].description
            };
            return result;
        } catch (err) {
            throw err;
        }
    }

    const handleInputChange = (event)=>{
        setCity(event.target.value);
        setError(false);
    }

    let handleOnSubmit = async(event)=>{
        try {
            event.preventDefault();
            let newInfo = await getWeatherInfo();
            initWeatherInfo(newInfo);
            setCity("");
        } catch (error) {
            setError(true);
        }
    }
    
    return(
        <div className='searchBox'>
            <form onSubmit={handleOnSubmit}>
                <TextField 
                    onChange={handleInputChange}
                    id="city" 
                    label="Enter city name" 
                    variant="outlined"
                    value={city}
                    required
                />
                <br />
                <small style={{color: 'gray'}}>Enter city details using comma separator Example: Patna,Bihar</small>
                <br /> <br />
                
                <Button 
                    variant="contained" 
                    type='submit'>
                    Search
                </Button>
                {error && <p style={{color:'red'}}>City not found</p>}
            </form>
        </div>
    )
}