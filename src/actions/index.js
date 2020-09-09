import resolve from "resolve";
const TIME_UPDATE = 7200000;

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

export const setDataFromOpenWeatherMap = (dataFromAPI) => {
  console.log(dataFromAPI);
  return {
    type: "SET_DATA_FROM_OPEN_WEATHER_MAP",
    payload: dataFromAPI,
  };
};

export const setDataFromWeatherStack = (dataFromAPI) => {
  console.log(dataFromAPI);
  return {
    type: "SET_DATA_FROM_WEATHER_STACK",
    payload: dataFromAPI,
  };
};

export const loadDataFromAPIs = (api, city) => (dispatch) => {
  if (api === "OpenWeatherMap") {
    if (
      (localStorage.getItem("persist:root") &&
        Date.now() - +JSON.parse(localStorage.getItem("persist:root")).time >
          TIME_UPDATE) ||
      !localStorage.getItem("persist:root") ||
      `"${city.toUpperCase()}"` !==
        JSON.parse(
          localStorage.getItem("persist:root")
        ).cityName.toUpperCase() ||
      api === "OpenWeatherMap"
    ) {
      dispatch(startDownload);
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.API_KEY_FROM_OPEN_WEATHER}&units=metric`
      )
        .then((response) => response.json())
        .then((json) =>
          json.cod === 200
            ? dispatch(setDataFromOpenWeatherMap(json))
            : dispatch(errorDownload(json.cod))
        )
        .then(dispatch(endDownload));
      dispatch(selectApi(api));
      dispatch(setTimeRequest(Date.now()));
    }
  } else if (api === "Weatherstack") {
    if (
      (localStorage.getItem("persist:root") &&
        Date.now() - +JSON.parse(localStorage.getItem("persist:root")).time >
          TIME_UPDATE) ||
      !localStorage.getItem("persist:root") ||
      `"${city.toUpperCase()}"` !==
        JSON.parse(
          localStorage.getItem("persist:root")
        ).cityName.toUpperCase() ||
      api === "Weatherstack"
    ) {
      dispatch(startDownload);
      fetch(
        `http://api.weatherstack.com/current?access_key=${process.env.API_KEY_FROM_WEATHERSTACK}&query=${city}&units=m`
      )
        .then((response) => response.json())
        .then((json) => dispatch(setDataFromWeatherStack(json)))
        .then(() => dispatch(endDownload));
        dispatch(selectApi(api));
        dispatch(setTimeRequest(Date.now()));
    }
  } else dispatch(endDownload);
  console.log(Date.now());
  console.log(api);
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

export const setUserCoordinates = (data) => {
  console.log(data);
  return {
    type: "SET_USER_COORDINATES",
    payload: data,
  };
};

export const getError = (error) => {
  return {
    type: "GET_ERROR",
    payload: error,
  };
};

export const loadGeolocation = () => async (dispatch) => {
  dispatch(startDownload);
  return new Promise((resolve, reject) => {
    navigator.geolocation.watchPosition(resolve, reject);
  })
    .then((res) => dispatch(setUserCoordinates(res)))
    .catch((error) => dispatch(getError(error)));
};

export const DisplayInfoByGeo = () => async (dispatch) => {
  try {
    const { payload } = await dispatch(loadGeolocation());
    if (payload.code == 1) {
      throw new Error("You have denied access to geolocation");
    }
    dispatch(startDownload);
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${payload.coords.latitude}&lon=${payload.coords.longitude}&appid=${process.env.API_KEY_FROM_OPEN_WEATHER}&units=metric`
    );
    const data = await response.json();
    dispatch(setDataFromOpenWeatherMap(data));
    dispatch(endDownload);
    dispatch(selectApi('OpenWeatherMap'))
  } catch (e) {
    console.error(e);
    dispatch(getError(e.message));
  }
};

export const setTimeRequest = (time) => {
  return {
    type: "SET_TIME_REQUEST",
    payload: time,
  };
};
