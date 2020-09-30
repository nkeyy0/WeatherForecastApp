import { takeEvery, put, call, all } from "redux-saga/effects";
import resolve from "resolve";
import {
  LOAD_DATA_FROM_OPENWEATHERMAP,
  LOAD_DATA_FROM_WEATHERSTACK,
  LOAD_GEOLOCATION_FROM_OPENWEATHERMAP,
  NEW_USER_REGISTRATION,
} from "../constants/constants";
import {
  setDataFromOpenWeatherMapSuccess,
  setDataFromWeatherStackSuccess,
  endDownload,
  startDownload,
  errorDownload,
  selectApi,
} from "../actions/index";

export function* rootSaga() {
  yield all([
    watchFetchDataFromOpenWeatherMap(),
    watchFetchDataFromWeatherstack(),
    watchGeolocation(),
    watchNewUserRegistration()
  ]);
}

export function* watchGeolocation() {
  yield takeEvery(LOAD_GEOLOCATION_FROM_OPENWEATHERMAP, loadGeolocationWorker);
}
export function* watchFetchDataFromOpenWeatherMap() {
  yield takeEvery(LOAD_DATA_FROM_OPENWEATHERMAP, fetchDataFromOpenWeather);
}

export function* watchFetchDataFromWeatherstack() {
  yield takeEvery(LOAD_DATA_FROM_WEATHERSTACK, fetchDataFromWeatherstack);
}

export function* watchNewUserRegistration() {
  yield takeEvery(NEW_USER_REGISTRATION, NewUserRegistrationWorker)
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
    yield put(errorDownload("City not found"));
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
    yield put(errorDownload("City not found"));
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

    const data = yield call(() => {
      return fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.coords.latitude}&lon=${coordinates.coords.longitude}&appid=${process.env.API_KEY_FROM_OPEN_WEATHER}&units=metric`
      ).then((response) => response.json());
    });
    yield put(setDataFromOpenWeatherMapSuccess(data));
    yield put(selectApi("OpenWeatherMap"));
    yield put(endDownload);
  } catch (error) {
    yield put(errorDownload("Failed to access geolocation"));
  }
}

function* NewUserRegistrationWorker(action) {
  try {
    yield put(startDownload);
    fetch('http://localhost:5000/register', {method: 'POST', cache: 'no-cache',  body: JSON.stringify(action.payload)}).then(resp => resp.status)
  } catch (error) {
    yield put(errorDownload("Failed to access geolocation"));
  }
  finally{
    yield put(endDownload);
  }
}
