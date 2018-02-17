import React from "react";
import { Route, Switch } from "react-router-dom";
import {
	Form,
	Draft,
	SimpleForm,
	Validation,
	Submit,
	AsyncValidate,
	InitialState
} from "./containers";

export default () => {
	return (
		<Switch>
			<Route exact path="/form" component={Form} />
			<Route exact path="/form/simple" component={SimpleForm} />
			<Route exact path="/form/fieldlevel" component={Validation} />
			<Route exact path="/form/async" component={AsyncValidate} />
			<Route exact path="/form/submit" component={Submit} />
			<Route exact path="/form/initial" component={InitialState} />
			<Route exact path="/draft" component={Draft} />
		</Switch>
	);
};
