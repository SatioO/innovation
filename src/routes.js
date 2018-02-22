import React from "react";
import { Route, Switch } from "react-router-dom";
import {
	InitialState,
	Nested,
	Wizard,
	DataTable,
	Chart,
	Form,
	Draft
} from "./containers";

export default () => {
	return (
		<Switch>
			{/* form routes */}
			<Route exact path="/form" component={Form} />
			<Route exact path="/form/initial" component={InitialState} />
			{/* <Route exact path="/form/simple" component={SimpleForm} />
			<Route exact path="/form/fieldlevel" component={Validation} />
			<Route exact path="/form/async" component={AsyncValidate} />
			<Route exact path="/form/submit" component={Submit} />
			
			<Route exact path="/form/wizard" component={Wizard} />
			<Route exact path="/form/nested" component={Nested} /> */}
			{/* draft routes */}
			<Route exact path="/draft" component={Draft} />
			{/* Datatable */}
			<Route exact path="/datatable" component={DataTable} />
			{/*  Charts */}
			<Route exact path="/charts" component={Chart} />
		</Switch>
	);
};
