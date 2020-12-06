import {
  SET_DATA_TO_CHART,
  SET_LABELS_TO_CHART,
  SET_DATA_AND_LABELS_TO_CHART,
} from "../constants/constants";

const initialState = {
  data: [],
  labels: [],
};

const weatherChart = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_AND_LABELS_TO_CHART:
      return {
        ...state,
        chartData: {
          labels: [...action.payload.labels],
          datasets: [...action.payload.data],
        },
      };
    default:
      return state;
  }
};

export default weatherChart;
