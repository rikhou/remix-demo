import { combineReducers } from "redux";
import sharedSlice from "./sharedSlice";

const rootReducer = combineReducers({
  shared: sharedSlice,
});

export default rootReducer;
