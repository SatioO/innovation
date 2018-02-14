import React from "react";
import { Route, Switch } from "react-router-dom";
import { Form, Draft } from "./containers";

export default () => {
	return (
		<Switch>
			<Route exact path="/form" component={Form} />
			<Route exact path="/draft" component={Draft} />
		</Switch>
	);
};
