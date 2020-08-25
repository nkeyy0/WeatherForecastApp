import React from 'react';

class WeatherInfo extends React.Component {
    render() {
    return(
        <div>
        <h2>Weather forecast in {this.props.enterCity}:</h2>
        <p>Temperature:</p>
        <p>Atmosphere pressure:</p>
        <p>Wind:</p>
        <p>Air humidity:</p>
        <p>Cloudiness:</p>
        </div>
        )}
}

export default WeatherInfo;