import React from "react";
import { Route, Switch } from "react-router-dom";
import {
	Form,
	Draft,
	SimpleForm,
	Validation,
	Submit,
	AsyncValidate,
	InitialState,
	Nested,
	Wizard,
	Mentions,
	Emojis,
	Hashtags,
	Inlines,
	SideToolbars,
	Videos,
	Chart
} from "./containers";

export default () => {
	return (
		<Switch>
			{/* form routes */}
			<Route exact path="/form" component={Form} />
			<Route exact path="/form/simple" component={SimpleForm} />
			<Route exact path="/form/fieldlevel" component={Validation} />
			<Route exact path="/form/async" component={AsyncValidate} />
			<Route exact path="/form/submit" component={Submit} />
			<Route exact path="/form/initial" component={InitialState} />
			<Route exact path="/form/wizard" component={Wizard} />
			<Route exact path="/form/nested" component={Nested} />
			{/* draft routes */}
			<Route exact path="/draft" component={Draft} />
			<Route exact path="/draft/mentions" component={Mentions} />
			<Route exact path="/draft/emoji" component={Emojis} />
			<Route exact path="/draft/hashtag" component={Hashtags} />
			<Route exact path="/draft/inline" component={Inlines} />
			<Route exact path="/draft/sidebar" component={SideToolbars} />
			<Route exact path="/draft/video" component={Videos} />
			<Route exact path="/charts" component={Chart} />
		</Switch>
	);
};
