import React from 'react';
import CitySearch from '../containers/CitySearch'
import WeatherInfoDisplay from '../containers/WeatherInfoDisplay';
import SelectWeather from '../containers/SelectWeather'
class App extends React.Component {
    render(){
        return (
            <div>
            <h1>Weather</h1>
            <SelectWeather/>
            <CitySearch/>
            <WeatherInfoDisplay/>
            </div>
        );
    }
}

export default App;

