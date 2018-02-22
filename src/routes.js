import React from "react";
import { Route, Switch } from "react-router-dom";
import {
	InitialState,
	DataTable,
	Chart,
	Draft,
	Validation,
	Nested,
	Wizard
} from "./containers";

export default () => {
	return (
		<Switch>
			{/* form routes */}
			<Route exact path="/form/initial" component={InitialState} />
			<Route exact path="/form/fieldlevel" component={Validation} />
			<Route exact path="/form/nested" component={Nested} />
			<Route exact path="/form/wizard" component={Wizard} />
			{/* draft routes */}
			<Route exact path="/draft" component={Draft} />
			{/* Datatable */}
			<Route exact path="/datatable" component={DataTable} />
			{/*  Charts */}
			<Route exact path="/charts" component={Chart} />
		</Switch>
	);
};
