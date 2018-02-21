import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = ({ title }) => {
	return (
		<nav id="sidebar">
			<div className="sidebarHeader">
				<h3>{title}</h3>
			</div>

			<ul className="list-unstyled components">
				<li>
					<Link to="/form">Forms</Link>
				</li>
				<li>
					<Link to="/draft">Editor</Link>
				</li>
				<li>
					<Link to="/charts">Charts</Link>
				</li>
			</ul>
		</nav>
	);
};
