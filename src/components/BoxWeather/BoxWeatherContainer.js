import { connect } from "react-redux";
import { default as BoxWeather } from "./BoxWeather";

const mapStateToProps = (state) => ({
  descriptionWeather: state.weatherInfo.descriptionWeather,
  cityName: state.weatherInfo.cityName,
  countryName: state.weatherInfo.countryName,
  temperature: state.weatherInfo.temperature,
  humidity: state.weatherInfo.humidity,
  windSpeed: state.weatherInfo.windSpeed,
  visibility: state.weatherInfo.visibility,
  pressure: state.weatherInfo.pressure,
  sunrise: state.weatherInfo.sunrise,
  sunset: state.weatherInfo.sunset,
  weatherImage: state.weatherInfo.weatherImage,
  tempUnits: state.weatherInfo.tempUnits,
});

export default connect(mapStateToProps)(BoxWeather);
