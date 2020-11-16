import { SET_DATA_TO_CHART, SET_LABELS_TO_CHART } from "../constants/constants";

const initialState = {
  data: [],
  labels: [],
};

const weatherChart = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_TO_CHART:
      return {
        ...state,
        data: action.payload,
      };
    case SET_LABELS_TO_CHART: 
    return {
      ...state,
      labels: action.payload
    }
    default:
      return state;
  }
};

export default weatherChart;
