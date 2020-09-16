import resolve from "resolve";



export const searchCity = (city) => {
  console.log("Search...");
  return {
    type: "SEARCH_CITY",
    payload: city,
  };
};

export const displayTemperature = (temperature) => {
  return {
    type: "DISPLAY_TEMPERATURE",
    payload: temperature,
  };
};

export const changeInputSearch = (cityChanged) => {
  return {
    type: "CHANGE_INPUT_SEARCH",
    payload: cityChanged,
  };
};

export const selectOnChange = (APIChanged) => {
  return {
    type: "SELECT_ON_CHANGE",
    payload: APIChanged,
  };
};

export const setDataFromOpenWeatherMapSuccess = (dataFromAPI) => {
  console.log(dataFromAPI);
  return {
    type: "SET_DATA_FROM_OPEN_WEATHER_MAP_SUCCESED",
    payload: dataFromAPI,
  };
};

export const setDataFromWeatherStackSuccess = (dataFromAPI) => {
  console.log(dataFromAPI);
  return {
    type: "SET_DATA_FROM_WEATHER_STACK_SUCCESED",
    payload: dataFromAPI,
  };
};

export const loadDataFromOpenWeatherMap = city => {
  return {
    type: "LOAD_DATA_FROM_OPENWEATHERMAP",
    payload: city
  };
};

export const loadDataFromWeatherstack = city => {
  return {
    type: "LOAD_DATA_FROM_WEATHERSTACK",
    payload: city
  };
};

export const loadGeolocationFromOpenWeatherMap = () => {
  return {
    type: "LOAD_GEOLOCATION_FROM_OPENWEATHERMAP",
  };
};



export const startDownload = {
  type: "START_DOWNLOAD",
  payload: true,
};

export const errorDownload = (error) => ({
  type: "ERROR_DOWNLOAD",
  payload: error,
});

export const endDownload = {
  type: "END_DOWNLOAD",
  payload: false,
};

export const selectApi = (api) => {
  return {
    type: "SELECT_API",
    payload: api,
  };
};

// export const setUserCoordinates = (data) => {
//   console.log(data);
//   return {
//     type: "SET_USER_COORDINATES",
//     payload: data,
//   };
// };

// export const loadGeolocation = () => async (dispatch) => {
//   dispatch(startDownload);
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.watchPosition(resolve, reject);
//   })
//     .then((res) => dispatch(setUserCoordinates(res)))
//     .catch((error) => dispatch(getError(error)));
// };

export const getError = (error) => {
  return {
    type: "GET_ERROR",
    payload: error,
  };
};



export const setTimeRequest = (time) => {
  return {
    type: "SET_TIME_REQUEST",
    payload: time,
  };
};
