import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import mentions from "./mentions";

export default combineReducers({ routing, mentions });
