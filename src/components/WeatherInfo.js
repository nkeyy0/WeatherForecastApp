import React from 'react';
import convertToCelsius from '../convert/convertToСelsius';

class WeatherInfo extends React.Component {
    render(){
        const {city, temperature} = this.props;
        return(
            <div>
                <h2>Weather for: {city}</h2>
                <p></p>
                <p>Temperature:{(temperature)&&convertToCelsius(temperature)}&#8451;</p>
                <p>Pressure: </p>
                <p>Wind:</p>
            </div>
        );
    }
}

export default WeatherInfo;