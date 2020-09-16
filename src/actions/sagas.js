import { takeEvery, put, call, all } from "redux-saga/effects";
import resolve from "resolve";
import {
  setDataFromOpenWeatherMapSuccess,
  setDataFromWeatherStackSuccess,
  endDownload,
  startDownload,
  errorDownload,
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
    yield put(endDownload);
    yield put(selectApi(api));
  } catch (error) {
    console.log(action.payload);
    yield put(errorDownload(error.message));
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
    yield put(endDownload);
    yield put(selectApi(api));
  } catch (error) {
    console.log(action.payload);
    yield put(errorDownload(error.message));
  }
}

function* loadGeolocationWorker() {
  yield put(startDownload);
  // try {
  //   const coordinates = yield call(async () => {
  //     const result = await navigator.geolocation.watchPosition((res) => res);
  //     return result;
  //   });

  //   console.log(coordinates);

    const data = yield call(() => {
      return fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${process.env.API_KEY_FROM_OPEN_WEATHER}&units=metric`
      ).then((response) => response.json());
    });
    yield put(setDataFromOpenWeatherMapSuccess(data));
    yield put(endDownload);
    yield put(selectApi("OpenWeatherMap"));
  } catch (error) {
    yield put(errorDownload(error.message));
  }
}
