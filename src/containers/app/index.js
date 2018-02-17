import React from "react";
import { Sidebar } from "../../components";
import AppRoutes from "../../routes";

export const App = () => {
	return (
		<div className="wrapper">
			<Sidebar title="Innovation Day" />
			<div id="content">
				<AppRoutes />
			</div>
		</div>
	);
};
