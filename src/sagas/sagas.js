import { takeEvery, put, call, all } from "redux-saga/effects";
import jwt_decode from "jwt-decode";
import {
  LOAD_CITIES_FROM_DB,
  LOAD_DATA_FROM_APIS,
  LOAD_DATA_FROM_WEATHERSTACK,
  LOAD_GEOLOCATION_FROM_OPENWEATHERMAP,
  NEW_USER_REGISTRATION,
  NEW_USER_REGISTRATION_STATUS,
  USER_LOGIN,
  WEATHER_INFO_AFTER_LOGIN,
} from "../constants/constants";
import {
  setDataFromOpenWeatherMapSuccess,
  setDataFromWeatherStackSuccess,
  endDownload,
  startDownload,
  errorDownload,
  selectApi,
  newUserRegistrationFailed,
  newUserRegistrationSuccess,
  UserLogin,
  WeatherInfoAfterLogin,
  UserLoginFailed,
  UserLoginSuccess,
  successDownload,
  setDataToCharts,
  loadCitiesWeatherFromDB,
} from "../actions/index";

export function* rootSaga() {
  yield all([
    watchFetchDataFromApis(),
    watchNewUserRegistration(),
    watchUserLogin(),
    watchGetCitiesWeatherWorker(),
  ]);
}

export function* watchGeolocation() {
  yield takeEvery(LOAD_GEOLOCATION_FROM_OPENWEATHERMAP, loadGeolocationWorker);
}
export function* watchFetchDataFromApis() {
  yield takeEvery(LOAD_DATA_FROM_APIS, getWeatherFromApis);
}

export function* watchNewUserRegistration() {
  yield takeEvery(NEW_USER_REGISTRATION, NewUserRegistrationWorker);
}

export function* watchUserLogin() {
  yield takeEvery(USER_LOGIN, UserLoginWorker);
}

export function* watchGetCitiesWeatherWorker() {
  yield takeEvery(LOAD_CITIES_FROM_DB, getCitiesWeatherWorker);
}

function* getWeatherFromApis(action) {
  yield put(startDownload);
  try {
    const data = yield call(() => {
      return fetch(
        `http://localhost:5000/getWeatherInfo?email=${action.payload.email}&city=${action.payload.city}&api=${action.payload.api}`,
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Expose-Headers": "Authorization",
            Authorization: `${localStorage.getItem("jwtToken")}`,
          },
          referrerPolicy: "no-referrer",
        }
      )
        .then((res) => res.json())
        .catch((error) => error);
    });
    console.log(data);
    console.log(action.payload);
    if (data.code === 404) {
      const error = new Error();
      error.message = "City not found!";
      throw error;
    }
    if (action.payload.api === "OpenWeatherMap") {
      yield put(setDataFromOpenWeatherMapSuccess(data));
      yield put(selectApi("OpenWeatherMap"));
      yield put(errorDownload(null));
    }
    if (action.payload.api === "Weatherstack") {
      yield put(setDataFromWeatherStackSuccess(data));
      yield put(selectApi("Weatherstack"));
      yield put(errorDownload(null));
    }
  } catch (error) {
    yield put(errorDownload(error.message));
  } finally {
    yield put(endDownload);
  }
}

// const getPosition = (options) => {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject, options);
//   });
// };

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
  } catch (error) {
    yield put(errorDownload("Failed to access geolocation"));
  } finally {
    yield put(endDownload);
  }
}

function* NewUserRegistrationWorker(action) {
  try {
    yield put(startDownload);
    const data = yield call(() => {
      return fetch("http://localhost:5000/createUser", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(action.payload),
      }).then((res) => res.json());
    });
    if (data.code === 404) {
      const error = new Error();
      error.message = data.message;
      throw error;
    }
    yield put(newUserRegistrationFailed(null));
    yield put(newUserRegistrationSuccess(NEW_USER_REGISTRATION_STATUS));
  } catch (error) {
    yield put(newUserRegistrationSuccess(null));
    yield put(newUserRegistrationFailed(error.message));
  } finally {
    yield put(endDownload);
  }
}

function* UserLoginWorker(action) {
  try {
    yield put(startDownload);
    const data = yield call(() => {
      return fetch("http://localhost:5000/login", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Expose-Headers": "Authorization",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(action.payload),
      }).then(async (res) => {
        const token = res.headers.get("Authorization");
        console.log(token);
        localStorage.setItem("jwtToken", token);
        return res.json();
      });
    });

    if (data.code === 401) {
      const error = new Error();
      error.message = data.message;
      throw error;
    }
    if (data.code === 404) {
      const error = new Error();
      error.message = data.message;
      throw error;
    }
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const decodedUserInfo = jwt_decode(token);
      console.log(decodedUserInfo);
      const User = {
        name: decodedUserInfo.name,
        surname: decodedUserInfo.surname,
        patronymic: decodedUserInfo.patronymic,
        email: decodedUserInfo.email,
        city: decodedUserInfo.city,
      };
      yield put(UserLoginSuccess(User));
    }
    console.log(data);
    if (data.api === "OpenWeatherMap") {
      yield put(setDataFromOpenWeatherMapSuccess(data));
      yield put(selectApi("OpenWeatherMap"));
      yield put(errorDownload(null));
    }
    if (data.api === "Weatherstack") {
      yield put(setDataFromWeatherStackSuccess(data));
      yield put(selectApi("Weatherstack"));
      yield put(errorDownload(null));
    }
  } catch (error) {
    yield put(UserLoginFailed(error.message));
  } finally {
    yield put(endDownload);
  }
}

function* getCitiesWeatherWorker(action) {
  yield put(startDownload);
  try {
    const data = yield call(() => {
      return fetch(
        `http://localhost:5000/getCities?email=${action.payload}`,
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Expose-Headers": "Authorization",
            Authorization: `${localStorage.getItem("jwtToken")}`,
          },
          referrerPolicy: "no-referrer",
        }
      )
        .then((res) => res.json())
        .catch((error) => error);
    });
    console.log(data.cities);
    console.log(action.payload);
    if (data.code === 404) {
      const error = new Error();
      error.message = "Cities not found!";
      throw error;
    }
    yield put(setDataToCharts(data.cities));
    yield put(errorDownload(null));
  } catch (error) {
    yield put(errorDownload(error.message));
  } finally {
    yield put(endDownload);
  }
}
