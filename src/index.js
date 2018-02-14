import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";
import { App } from "./containers";
import { BrowserRouter } from "react-router-dom";

const target = document.querySelector("#root");

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	target
);
registerServiceWorker();
