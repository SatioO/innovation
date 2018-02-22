import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { App } from "./containers";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { gql } from "apollo-boost";
import { Query, graphql } from "react-apollo";
import axios from "axios";
import { configureStore } from "./store";
const client = new ApolloClient({
	link: new HttpLink({
		uri: "http://aicstage.accionlabs.com/api/accion"
	}),
	cache: new InMemoryCache()
});

axios.interceptors.request.use(axiosConfig => {
	if (axiosConfig.url[0] === "/") {
		axiosConfig.url = "https://prioriti.net/aicgateway/accion"; // eslint-disable-line no-param-reassign
	}
	return axiosConfig;
});

export const store = configureStore(axios, {});

const DemoQuery = gql`
	{
		demos {
			items {
				id
			}
		}
	}
`;

ReactDOM.render(
	<ApolloProvider store={store} client={client}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>,
	document.querySelector("#root")
);

registerServiceWorker();
