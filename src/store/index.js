import { createStore } from "redux";
import InnovationApp from "./reducers";

export const Store = createStore(InnovationApp);

export * from "./reducers";
