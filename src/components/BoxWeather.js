import React from 'react';
import firstLetterToUpperCase from '../convert/firstLetterToUpperCase'
import convertWindSpeed from '../convert/convertWindSpeed';
import Box from '@material-ui/core/Box';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Typography } from '@material-ui/core';
import getSunrise from '../convert/getSunrise';

class BoxWeather extends React.Component {
render() {
    const {descriptionWeather, cityName, countryName, temperature, humidity, windSpeed, visibility, pressure, sunrise, sunset, api} = this.props;
    return(
<Box>
                {(cityName && countryName) ? 
                <Typography variant = "h2">
                    <LocationOnIcon fontSize = 'large'/> 
                    {cityName}, {countryName}:
                </Typography> 
                : null}
                {(descriptionWeather) ?
                 <Typography variant = "body1">
                    {firstLetterToUpperCase(descriptionWeather)}
                    </Typography>
                : null}
                {(temperature) ?
                 <Typography variant = "body1">
                    Temperature: {temperature} &#8451;
                 </Typography> 
                 : null}
                {(humidity) ? 
                <Typography variant = "body1">
                    Humidity: {humidity} %
                </Typography>
                 : null}
                {(windSpeed) ? 
                <Typography variant = "body1">
                    Wind speed: {convertWindSpeed(windSpeed)} M/s
                </Typography>
                 : null}
                {(visibility) ?
                 <Typography variant = "body1">
                    Visibility: {visibility} km
                 </Typography> 
                 : null}
                {(pressure) ?
                 <Typography variant = "body1">
                    Pressure: {pressure} hPa
                 </Typography>
                  : null}
                  {(sunrise) ?
                 <Typography variant = "body1">
                 Sunrise : {getSunrise(sunrise)} 
                 </Typography>
                  : null}
                  {(sunset) ?
                 <Typography variant = "body1">
                 Sunset : {getSunrise(sunset)} 
                 </Typography>
                  : null}
            </Box>
    );
}
}

export default BoxWeather;