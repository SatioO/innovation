import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";
import { configureStore } from "./store";
import { App } from "./containers";

axios.interceptors.request.use(axiosConfig => {
	if (axiosConfig.url[0] === "/") {
		axiosConfig.url = "https://prioriti.net/aicgateway/accion"; // eslint-disable-line no-param-reassign
	}
	return axiosConfig;
});

const store = configureStore(axios, {});

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.querySelector("#root")
);

registerServiceWorker();
