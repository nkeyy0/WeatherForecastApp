import React from 'react';

class WeatherInfo extends React.Component {
    render() {
    return(
        <div>
        <h2>Weather forecast in {this.props.enterCity}:</h2>
        </div>
        )}
}

export default WeatherInfo;