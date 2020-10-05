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
