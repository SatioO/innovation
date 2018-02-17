import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import { reducer as form } from "redux-form";
import mentions from "./mentions";
import account from "./account";

export default combineReducers({ routing, form, mentions, account });
