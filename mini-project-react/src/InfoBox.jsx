import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css';


export default function InfoBox({info}) {
    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={
                        info.humidity > 80
                        ? import.meta.env.VITE_RAIN_URL
                        : info.temp>22
                        ? import.meta.env.VITE_HOT_URL
                        : import.meta.env.VITE_SNOW_URL
                    }
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city} &nbsp;
                    {
                        info.humidity > 80
                        ? <ThunderstormIcon />
                        : info.temp>22
                        ? <WbSunnyIcon />
                        : <AcUnitIcon />
                    }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                    <p>Humidity : {info.humidity}&#37;</p>
                    <p>Temperature : {info.temp}&deg;C</p>
                    <p>Min temperature : {info.tempMin}&deg;C</p>
                    <p>Max Temperature : {info.tempMax}&deg;C</p>
                    <hr />
                    <p>Weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
                </Typography>
                </CardContent>
            </Card>
        </div>
    )
}