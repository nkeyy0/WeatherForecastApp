import { combineReducers } from "redux";
import auth from "./auth";
import download from "./download";
import registration from "./registration";
import weatherInfo from "./weatherInfo";
import citiesWeather from './citiesWeather';

const rootReducer = combineReducers({
  auth,
  download,
  registration,
  weatherInfo,
  citiesWeather
});

export default rootReducer;
