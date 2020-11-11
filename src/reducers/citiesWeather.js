import { SET_DATA_TO_CHARTS } from "../constants/constants";

const initialState = {
  cities: null,
};

const citiesWeather = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_TO_CHARTS:
      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
};

export default citiesWeather;
