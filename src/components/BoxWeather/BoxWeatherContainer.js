import { connect } from "react-redux";
import { default as BoxWeather } from "./BoxWeather";


const mapStateToProps = (state) => ({
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
  weatherImage: state.weatherImage,
});

export default connect(mapStateToProps)(BoxWeather);
