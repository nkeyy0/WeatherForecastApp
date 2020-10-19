import {
  CHANGE_INPUT_SEARCH,
  DISPLAY_TEMPERATURE,
  END_DOWNLOAD,
  ERROR_DOWNLOAD,
  LOAD_DATA_FROM_OPENWEATHERMAP,
  LOAD_DATA_FROM_WEATHERSTACK,
  LOAD_GEOLOCATION_FROM_OPENWEATHERMAP,
  SEARCH_CITY,
  SELECT_API,
  SELECT_ON_CHANGE,
  SET_DATA_FROM_OPEN_WEATHER_MAP_SUCCESS,
  SET_DATA_FROM_WEATHER_STACK_SUCCESS,
  START_DOWNLOAD,
  NEW_USER_REGISTRATION,
  NEW_USER_REGISTRATION_FAILED,
  NEW_USER_REGISTRATION_SUCCESS,
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  LOGOUT_USER,
  SET_USER_EMAIL,
  WEATHER_INFO_AFTER_LOGIN,
  SET_WEATHER_INFO_SUCCESS,
  SUCCESS_DOWNLOAD,
} from "../constants/constants";

export const searchCity = (city) => {
  console.log("Search...");
  return {
    type: SEARCH_CITY,
    payload: city,
  };
};


export const displayTemperature = (temperature) => {
  return {
    type: DISPLAY_TEMPERATURE,
    payload: temperature,
  };
};

export const changeInputSearch = (cityChanged) => {
  return {
    type: CHANGE_INPUT_SEARCH,
    payload: cityChanged,
  };
};

export const selectOnChange = (APIChanged) => {
  return {
    type: SELECT_ON_CHANGE,
    payload: APIChanged,
  };
};

export const setDataFromOpenWeatherMapSuccess = (dataFromAPI) => {
  console.log(dataFromAPI);
  return {
    type: SET_DATA_FROM_OPEN_WEATHER_MAP_SUCCESS,
    payload: dataFromAPI,
  };
};

export const setDataFromWeatherStackSuccess = (dataFromAPI) => {
  console.log(dataFromAPI);
  return {
    type: SET_DATA_FROM_WEATHER_STACK_SUCCESS,
    payload: dataFromAPI,
  };
};

export const loadDataFromOpenWeatherMap = (city) => {
  return {
    type: LOAD_DATA_FROM_OPENWEATHERMAP,
    payload: city,
  };
};

export const loadDataFromWeatherstack = (city) => {
  return {
    type: LOAD_DATA_FROM_WEATHERSTACK,
    payload: city,
  };
};

export const loadGeolocationFromOpenWeatherMap = () => {
  return {
    type: LOAD_GEOLOCATION_FROM_OPENWEATHERMAP,
  };
};

export const startDownload = {
  type: START_DOWNLOAD,
  payload: true,
};

export const errorDownload = (error) => ({
  type: ERROR_DOWNLOAD,
  payload: error,
});

export const successDownload = {
  type: SUCCESS_DOWNLOAD,
  payload: null,
};

export const endDownload = {
  type: END_DOWNLOAD,
  payload: false,
};

export const selectApi = (api) => {
  return {
    type: SELECT_API,
    payload: api,
  };
};

export const newUserRegistration = (body) => {
  return {
    type: NEW_USER_REGISTRATION,
    payload: body,
  };
};

export const UserLogin = (body) => {
  return {
    type: USER_LOGIN,
    payload: body,
  };
};

export const WeatherInfoAfterLogin = (body) => {
  return {
    type: WEATHER_INFO_AFTER_LOGIN,
    payload: body,
  };
};

export const UserLoginFailed = (err) => {
  return {
    type: USER_LOGIN_FAILED,
    payload: err,
  };
};

export const LogoutUser = () => {
  return {
    type: LOGOUT_USER,
    payload: false,
  };
};

export const UserLoginSuccess = (userInfo) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: userInfo,
  };
};

export const newUserRegistrationFailed = (err) => {
  return {
    type: NEW_USER_REGISTRATION_FAILED,
    payload: err,
  };
};

export const newUserRegistrationSuccess = (status) => {
  return {
    type: NEW_USER_REGISTRATION_SUCCESS,
    payload: status,
  };
};

export const setUserEmail = (email) => {
  return {
    type: SET_USER_EMAIL,
    payload: email,
  };
};
