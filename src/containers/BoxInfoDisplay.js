import WeatherInfo from '../components/WeatherInfo';
import { connect } from 'react-redux';
import BoxWeather from '../components/BoxWeather';


const mapStateToProps = (state) => {
    console.log(state)
    return { 
        descriptionWeather: state.descriptionWeather,
        cityName: state.cityName,
        countryName: state.countryName,
        temperature: state.temperature,
        humidity: state.humidity,
        windSpeed: state.windSpeed,
        visibility: state.visibility,
        pressure: state.pressure,
        sunrise: state.sunrise,
        sunset: state.sunset,
        downloadError: state.downloadError,
        api: state.api
    }
};

export default connect(mapStateToProps)(BoxWeather);