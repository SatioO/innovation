import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import { draft } from "./draft";

export default combineReducers({ routing, draft });
