import {
  NEW_USER_REGISTRATION_FAILED,
  NEW_USER_REGISTRATION_SUCCESS,
} from "../constants/constants";

const initialState = {
  registrationErrorDescription: null,
  registrationUserSuccess: null,
};

const registration = (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER_REGISTRATION_FAILED:
      console.log(state);
      return { ...state, registrationErrorDescription: action.payload };
    case NEW_USER_REGISTRATION_SUCCESS:
      return { ...state, registrationUserSuccess: action.payload };
    default:
      return state;
  }
};

export default registration;
