import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = ({ title }) => {
	return (
		<nav id="sidebar">
			<div className="sidebar-header">
				<h3 style={{ textAlign: "center", fontWeight: "bold" }}>
					Accion<span style={{ color: "#f04242" }}>Labs</span>
				</h3>
			</div>

			<ul className="list-unstyled components">
				<li className="active">
					<Link to="/charts">Charts</Link>
				</li>
				<li>
					<Link to="/datatable">Tables</Link>
				</li>
				<li>
					<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
						Forms
					</a>
					<ul className="collapse list-unstyled" id="homeSubmenu">
						<li>
							<Link to="/form/initial">Html Form</Link>
						</li>
						<li>
							<Link to="/form/fieldlevel">Validation Form</Link>
						</li>
						<li>
							<Link to="/form/nested">Nested Form</Link>
						</li>
						<li>
							<Link to="/form/wizard">Wizard Form</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link to="/draft">Text Editor</Link>
				</li>
			</ul>
		</nav>
	);
};
