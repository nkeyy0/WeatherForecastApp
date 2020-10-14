import { takeEvery, put, call, all } from "redux-saga/effects";
import jwt_decode from "jwt-decode";
import {
  LOAD_DATA_FROM_OPENWEATHERMAP,
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
  UserLoginFailed,
  UserLoginSuccess,
} from "../actions/index";

export function* rootSaga() {
  yield all([
    watchFetchDataFromOpenWeatherMap(),
    watchFetchDataFromWeatherstack(),
    watchGeolocation(),
    watchNewUserRegistration(),
    watchUserLogin(),
    watchWeatherInfoAfterAuth(),
  ]);
}

export function* watchGeolocation() {
  yield takeEvery(LOAD_GEOLOCATION_FROM_OPENWEATHERMAP, loadGeolocationWorker);
}
export function* watchFetchDataFromOpenWeatherMap() {
  yield takeEvery(LOAD_DATA_FROM_OPENWEATHERMAP, getDataFromOpenWeather);
}

export function* watchFetchDataFromWeatherstack() {
  yield takeEvery(LOAD_DATA_FROM_WEATHERSTACK, fetchDataFromWeatherstack);
}

export function* watchNewUserRegistration() {
  yield takeEvery(NEW_USER_REGISTRATION, NewUserRegistrationWorker);
}

export function* watchUserLogin() {
  yield takeEvery(USER_LOGIN, UserLoginWorker);
}

export function* watchWeatherInfoAfterAuth() {
  yield takeEvery(WEATHER_INFO_AFTER_LOGIN, WeatherInfoAfterLoginWorker);
}

// function* fetchDataFromOpenWeather(action) {
//   yield put(startDownload);
//   try {
//     const data = yield call(() => {
//       return fetch(
//         `http://api.openweathermap.org/data/2.5/weather?q=${action.payload}&APPID=${process.env.API_KEY_FROM_OPEN_WEATHER}&units=metric`
//       ).then((response) => response.json());
//     });
//     yield put(setDataFromOpenWeatherMapSuccess(data));
//     yield put(selectApi("OpenWeatherMap"));
//     yield put(endDownload);
//   } catch (error) {
//     yield put(errorDownload("City not found"));
//   }
// }

function* getDataFromOpenWeather(action) {
  yield put(startDownload);
  try {
    const data = yield call(() => {
      return fetch("http://localhost:5000/getWeatherInfoFromOpenWeatherMap", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          Authorization: localStorage.getItem("jwtToken"),
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(action.payload),
      }).then((res) => res.json());
    });
    console.log(data.dataResponse);
    yield put(setDataFromOpenWeatherMapSuccess(data.dataResponse));
    yield put(selectApi("OpenWeatherMap"));
  } catch (error) {
    yield put(errorDownload("City not found"));
  } finally {
    yield put(endDownload);
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
      }).then((res) => res.status);
    });
    if (data === 403) {
      throw new Error();
    }
    yield put(newUserRegistrationFailed(null));
    yield put(newUserRegistrationSuccess(NEW_USER_REGISTRATION_STATUS));
  } catch (error) {
    yield put(newUserRegistrationSuccess(null));
    yield put(newUserRegistrationFailed("User with this email already exists"));
  } finally {
    yield put(endDownload);
  }
}

//getWeatherInfoAfterLogin

function* WeatherInfoAfterLoginWorker() {
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
        Authorization: `${localStorage.getItem("jwtToken")}`,
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
  console.log(data.dataResponse);
  yield put(setDataFromOpenWeatherMapSuccess(data.dataResponse));
} catch (error) {
  yield put(setDataFromOpenWeatherMapSuccess({}));
}
finally{
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
        return res.status;
      });
    });

    if (data === 401) {
      const error = new Error();
      error.message = "Incorrect password. Try it again";
      throw error;
    }
    if (data === 404) {
      const error = new Error();
      error.message = "User with this email was not found";
      throw error;
    }
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const decodedUserInfo = jwt_decode(token);
      console.log(decodedUserInfo.userName);
      yield put(UserLoginSuccess(decodedUserInfo.userName));
    }

  } catch (error) {
    yield put(UserLoginFailed(error.message));
  } finally {
    yield put(endDownload);
  }
}
