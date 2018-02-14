import React, { Component } from "react";
import { Header, Sidebar } from "./components";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<Sidebar title="Innovation Day" />
				<div id="content">
					<Header title="Innovation day" />
				</div>
			</div>
		);
	}
}

export default App;
