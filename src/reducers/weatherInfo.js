import {
  SET_DATA_FROM_OPEN_WEATHER_MAP_SUCCESS,
  SET_DATA_FROM_WEATHER_STACK_SUCCESS,
  SELECT_API,
  SEARCH_CITY,
  CHANGE_TEMP_UNITS,
} from "../constants/constants";
import { convertToKilometers } from "../helpers/index";

const initialState = {
  cityName: null,
  api: null,
  temperature: null,
  pressure: null,
  descriptionWeather: null,
  humidity: null,
  windSpeed: null,
  visibility: null,
  countryName: null,
  sunrise: null,
  sunset: null,
  weatherImage: null,
  tempUnits: "celsius",
};

const weatherInfo = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CITY:
      return {
        ...state,
        cityName: action.payload,
      };

    case SET_DATA_FROM_OPEN_WEATHER_MAP_SUCCESS:
      return {
        ...state,
        temperature: action.payload.main.temp,
        humidity: action.payload.main.humidity,
        pressure: action.payload.main.pressure,
        descriptionWeather: action.payload.weather[0].description,
        windSpeed: action.payload.wind.speed,
        visibility: convertToKilometers(action.payload.visibility),
        cityName: action.payload.name,
        countryName: action.payload.sys.country,
        sunrise: action.payload.sys.sunrise,
        sunset: action.payload.sys.sunset,
        weatherImage: `http://openweathermap.org/img/w/${action.payload.weather[0].icon}.png`,
        api: "OpenWeatherMap",
      };

    case SET_DATA_FROM_WEATHER_STACK_SUCCESS:
      return {
        ...state,
        temperature: action.payload.current.temperature,
        humidity: action.payload.current.humidity,
        pressure: action.payload.current.pressure,
        descriptionWeather: action.payload.current.weather_descriptions[0],
        windSpeed: action.payload.current.wind_speed,
        visibility: action.payload.current.visibility.toFixed(1),
        cityName: action.payload.location.name,
        countryName: action.payload.location.country,
        weatherImage: action.payload.current.weather_icons[0],
        sunrise: null,
        sunset: null,
        api: "Weatherstack",
      };
    case SELECT_API:
      return { ...state, api: action.payload };
    case CHANGE_TEMP_UNITS: {
      return { ...state, tempUnits: action.payload };
    }
    default:
      return state;
  }
};

export default weatherInfo;
