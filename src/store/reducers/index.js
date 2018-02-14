import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import draft from "./draft";

const InnovationApp = combineReducers({
	routing: routerReducer,
	draft
});

export default InnovationApp;
