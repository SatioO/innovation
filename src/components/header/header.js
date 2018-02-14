import React from "react";
import "./header.css";

export const Header = ({ title }) => {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">{title}</div>
		</nav>
	);
};
