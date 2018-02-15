import React, { Component } from "react";
import { Sidebar } from "../../components";
import AppRoutes from "../../routes";

export default class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<Sidebar title="Innovation Day" />
				<div id="content">
					<AppRoutes />
				</div>
			</div>
		);
	}
}
