import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  LOGOUT_USER,
  SET_USER_EMAIL,
} from "../constants/constants";

const initialState = {
  isLogin: false,
  user: null,
  errorLogin: null,
  email: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        errorLogin: null,
      };
    }
    case USER_LOGIN_FAILED: {
      console.log("failed");
      return {
        ...state,
        isLogin: false,
        user: null,
        errorLogin: action.payload,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        isLogin: false,
        user: null,
      };
    }
    case SET_USER_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    default:
      return state;
  }
};

export default auth;
