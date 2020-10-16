import { combineReducers } from "redux";
import auth from "./auth";
import download from "./download";
import registration from "./registration";
import weatherInfo from "./weatherInfo";

const rootReducer = combineReducers({
  auth,
  download,
  registration,
  weatherInfo,
});

export default rootReducer;
