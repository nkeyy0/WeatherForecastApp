import { START_DOWNLOAD, END_DOWNLOAD, ERROR_DOWNLOAD, SUCCESS_DOWNLOAD } from "../constants/constants";

const initialState = {
  loading: false,
  downloadError: null,
};

const download = (state = initialState, action) => {
  switch (action.type) {
    case START_DOWNLOAD:
      return { ...state, loading: action.payload };
    case END_DOWNLOAD:
      console.log(state);
      return { ...state, loading: action.payload};
    case ERROR_DOWNLOAD:
      console.log(state);
      return { ...state, downloadError: action.payload};
    case SUCCESS_DOWNLOAD:
      return{...state, downloadError: action.payload}
    default:
      return state;
  }
};

export default download;
