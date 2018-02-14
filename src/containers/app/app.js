import React, { Component } from "react";
import { Header, Sidebar } from "../../components";
import "./app.css";
import AppRoutes from "../../routes";

export class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<Sidebar title="Innovation Day" />
				<div id="content">
					<Header title="Innovation day" />
					<AppRoutes />
				</div>
			</div>
		);
	}
}
