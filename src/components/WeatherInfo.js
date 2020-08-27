import React from 'react';
import convertToCelsius from '../convert/convertToСelsius';
import firstLetterToUpperCase from '../convert/firstLetterToUpperCase'
import convertWindSpeed from '../convert/convertWindSpeed';
import convertToKilometers from '../convert/convertToKilometers'

class WeatherInfo extends React.Component {
    render(){
        const {data} = this.props;
        return(
            <div>
                <h2>Weather for {data.name}:</h2>
                {(data.weather[0].description) ? <p>{firstLetterToUpperCase(data.weather[0].description)}</p> : null}
                {(data.main.temp) ? <p>Temperature: {convertToCelsius(data.main.temp)} &#8451;</p> : null}
                {(data.main.humidity) ? <p>Humidity: {data.main.humidity} %</p> : null}
                {(data.wind.speed) ? <p>Wind speed: {convertWindSpeed(data.wind.speed)} M/s</p> : null}
                {(data.visibility) ? <p>Visibility: {convertToKilometers(data.visibility)} km</p> : null}
                {(data.main.pressure) ? <p>Pressure: {data.main.pressure} hPa</p> : null}
            </div>
        );
    }
}

export default WeatherInfo;