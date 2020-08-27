import React from 'react';
import convertToCelsius from '../convert/convertToСelsius';
import firstLetterToUpperCase from '../convert/firstLetterToUpperCase'
import convertWindSpeed from '../convert/convertWindSpeed';
import convertToKilometers from '../convert/convertToKilometers'
import Box from '@material-ui/core/Box';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Typography } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

class WeatherInfo extends React.Component {
    render(){
        const {data} = this.props;
        return(
            <Box>
                {(data.name && data.sys.country) ? 
                <Typography variant = "h2">
                    <LocationOnIcon fontSize = 'large'/>
                    {data.name}, {data.sys.country}:
                </Typography> 
                : null}
                {(data.weather[0].description) ?
                 <Typography variant = "body1">
                    {firstLetterToUpperCase(data.weather[0].description)}
                    </Typography>
                : null}
                {(data.main.temp) ?
                 <Typography variant = "body1">
                    Temperature: {convertToCelsius(data.main.temp)} &#8451;
                 </Typography> 
                 : null}
                {(data.main.humidity) ? 
                <Typography variant = "body1">
                    Humidity: {data.main.humidity} %
                </Typography>
                 : null}
                {(data.wind.speed) ? 
                <Typography variant = "body1">
                    Wind speed: {convertWindSpeed(data.wind.speed)} M/s
                </Typography>
                 : null}
                {(data.visibility) ?
                 <Typography variant = "body1">
                    Visibility: {convertToKilometers(data.visibility)} km
                 </Typography> 
                 : null}
                {(data.main.pressure) ?
                 <Typography variant = "body1">
                    Pressure: {data.main.pressure} hPa
                 </Typography>
                  : null}
            </Box>
        );
    }
}

export default WeatherInfo;