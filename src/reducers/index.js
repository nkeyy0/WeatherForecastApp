import { combineReducers } from "redux";
import auth from "./auth";
import download from "./download";
import registration from "./registration";
import weatherInfo from "./weatherInfo";
import citiesWeather from './citiesWeather';
import weatherChart from './chart';

const rootReducer = combineReducers({
  auth,
  download,
  registration,
  weatherInfo,
  citiesWeather,
  weatherChart
});

export default rootReducer;
