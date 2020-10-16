import { START_DOWNLOAD, END_DOWNLOAD, ERROR_DOWNLOAD } from "../constants/constants";

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
      return { ...state, loading: action.payload, downloadError: null };
    case ERROR_DOWNLOAD:
      console.log(state);
      return { ...state, downloadError: action.payload, loading: false };
    default:
      return state;
  }
};

export default download;
