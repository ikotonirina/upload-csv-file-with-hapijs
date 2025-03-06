import { combineReducers } from "@reduxjs/toolkit";
import fileReducer from "./fileReducer";

const rootReducer = combineReducers({
  file: fileReducer,
});

export default rootReducer;
