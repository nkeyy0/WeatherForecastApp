import { takeEvery, put, call, all } from "redux-saga/effects";
import resolve from "resolve";
import {
  setDataFromOpenWeatherMapSuccess,
  setDataFromWeatherStackSuccess,
  endDownload,
  startDownload,
  errorDownload,
  selectApi,
} from "./index";

export function* rootSaga() {
  yield all([
    watchFecthDataFromOpenWeatherMap(),
    watchFecthDataFromWeatherstack(),
    watchGeolocaion(),
  ]);
}

export function* watchGeolocaion() {
  yield takeEvery(
    "LOAD_GEOLOCATION_FROM_OPENWEATHERMAP",
    loadGeolocationWorker
  );
}
export function* watchFecthDataFromOpenWeatherMap() {
  yield takeEvery("LOAD_DATA_FROM_OPENWEATHERMAP", fetchDataFromOpenWeather);
}

export function* watchFecthDataFromWeatherstack() {
  yield takeEvery("LOAD_DATA_FROM_WEATHERSTACK", fetchDataFromWeatherstack);
}

function* fetchDataFromOpenWeather(action) {
  yield put(startDownload);
  try {
    const data = yield call(() => {
      return fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${action.payload}&APPID=${process.env.API_KEY_FROM_OPEN_WEATHER}&units=metric`
      ).then((response) => response.json());
    });
    yield put(setDataFromOpenWeatherMapSuccess(data));
    yield put(selectApi("OpenWeatherMap"));
    yield put(endDownload);
  } catch (error) {
    yield put(
      errorDownload(
        "Failed to load resource: the server responded with a status of 404 (Not Found)"
      )
    );
  }
}

function* fetchDataFromWeatherstack(action) {
  yield put(startDownload);
  try {
    const data = yield call(() => {
      return fetch(
        `http://api.weatherstack.com/current?access_key=${process.env.API_KEY_FROM_WEATHERSTACK}&query=${action.payload}&units=m`
      ).then((response) => response.json());
    });
    yield put(setDataFromWeatherStackSuccess(data));
    yield put(selectApi("Weatherstack"));
    yield put(endDownload);
  } catch (error) {
    yield put(
      errorDownload(
        "Your API request failed. Please try again or contact support."
      )
    );
  }
}

const getPosition = (options) => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

function* loadGeolocationWorker() {
  yield put(startDownload);
  try {
    const coordinates = yield call(async () => {
      return getPosition();
    });

    console.log(coordinates);

    const data = yield call(() => {
      return fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.coords.latitude}&lon=${coordinates.coords.longitude}&appid=${process.env.API_KEY_FROM_OPEN_WEATHER}&units=metric`
      ).then((response) => response.json());
    });
    yield put(setDataFromOpenWeatherMapSuccess(data));
    yield put(selectApi("OpenWeatherMap"));
    yield put(endDownload);
  } catch (error) {
    yield put(errorDownload(error.messege));
  }
}
