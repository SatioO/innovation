import React from "react";
import { Link } from "react-router-dom";
export const Sidebar = ({ title }) => {
	return (
		<nav id="sidebar">
			<div className="sidebar-header">
				<h3>{title}</h3>
			</div>

			<ul className="list-unstyled components">
				<li>
					<Link to="/">Forms</Link>
				</li>
				<li>
					<Link to="/">Editor</Link>
				</li>
				<li>
					<Link to="/">Charts</Link>
				</li>
			</ul>
		</nav>
	);
};
