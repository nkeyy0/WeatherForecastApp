import { convertToKilometers } from "../convert/index";

import {
  CHANGE_INPUT_SEARCH,
  END_DOWNLOAD,
  SEARCH_CITY,
  SELECT_API,
  SELECT_ON_CHANGE,
  SET_DATA_FROM_OPEN_WEATHER_MAP_SUCCESS,
  SET_DATA_FROM_WEATHER_STACK_SUCCESS,
  START_DOWNLOAD,
  ERROR_DOWNLOAD,
  NEW_USER_REGISTRATION_FAILED,
  NEW_USER_REGISTRATION_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from "../constants/constants";

const initialState = {
  city: "",
  cityChanged: "",
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
  loading: false,
  downloadError: null,
  geoLatitude: null,
  geoLongitude: null,
  time: null,
  registrationErrorDescription: null,
  registrationUserSuccess: null,
  isLogin: false,
  user: null,
  errorLogin: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_SEARCH:
      return { ...state, cityChanged: action.payload };
    case SELECT_ON_CHANGE:
      return { ...state, api: action.payload };
    case SEARCH_CITY:
      return { ...state, city: action.payload };
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
        downloadError: null,
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
        downloadError: null,
      };
    case START_DOWNLOAD:
      return { ...state, loading: action.payload };
    case END_DOWNLOAD:
      console.log(state);
      return { ...state, loading: action.payload, downloadError: null };
    case ERROR_DOWNLOAD:
      console.log(state);
      return { ...state, downloadError: action.payload, loading: false };
    case SELECT_API:
      return { ...state, api: action.payload };
    case NEW_USER_REGISTRATION_FAILED:
      console.log(state);
      return { ...state, registrationErrorDescription: action.payload };
    case NEW_USER_REGISTRATION_SUCCESS:
      return { ...state, registrationUserSuccess: action.payload };
    case USER_LOGIN_SUCCESS: {
      console.log('success');
      return { ...state, isLogin: true, user: action.payload, errorLogin: null };
    }
    case USER_LOGIN_FAILED: {
      console.log('failed');
      return {
        ...state,
        isLogin: false,
        user: null,
        errorLogin: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
