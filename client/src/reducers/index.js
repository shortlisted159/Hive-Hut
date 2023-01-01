import { combineReducers } from "redux";

import authReducer from './authReducer'
import postReducer from "./postReducer";
// import postReducer from "../reducers/postReducer.js";

export const reducers = combineReducers({authReducer,postReducer}) 