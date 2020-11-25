import { combineReducers } from "redux";

import { userLoginReducer } from "./userReducers";

const allReducers = combineReducers({
  userLogin: userLoginReducer,
});

export default allReducers;
