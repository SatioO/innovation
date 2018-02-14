import { createStore, applyMiddleware } from "redux";
import InnovationApp from "./reducers";
import thunk from "redux-thunk";

const store = createStore(InnovationApp, applyMiddleware(thunk));

export default store;
export * from "./reducers";
