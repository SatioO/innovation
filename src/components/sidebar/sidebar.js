import React from "react";

export const Sidebar = ({ title }) => {
	return (
		<nav id="sidebar">
			<div className="sidebar-header">
				<h3>{title}</h3>
			</div>

			<ul className="list-unstyled components">
				<li>
					<a href="">Forms</a>
				</li>
				<li>
					<a href="">Editor</a>
				</li>
				<li>
					<a href="">Charts</a>
				</li>
			</ul>
		</nav>
	);
};
