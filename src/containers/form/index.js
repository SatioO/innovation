import React from "react";
import { Link } from "react-router-dom";

export const Form = () => {
	return (
		<div>
			<h3>
				<Link to="/form/simple">Simple Form</Link> #
			</h3>
			<blockquote>
				<p>
					The simplest form. Demonstrates how to attach standard inputs to
					Redux.
				</p>
			</blockquote>
			<hr />
			<h3>
				<Link to="/form/fieldlevel">Field-Level Validation</Link> #
			</h3>
			<blockquote>
				<p>How to add field-level client-side validation to your form.</p>
			</blockquote>
			<hr />
			<h3>
				<Link to="/form/submit">Submit Validation</Link> #
			</h3>
			<blockquote>
				<p>
					How to return server-side validation errors back from your submit
					function.
				</p>
			</blockquote>
			<hr />
			<h3>
				<Link to="/form/async">Async Validation</Link> #
			</h3>
			<blockquote>
				<p>
					How to run asynchronous server-side onChange validation on your form
					when certain fields change.
				</p>
			</blockquote>
			<hr />
			<h3>
				<Link to="/form/initial">Initialize From State</Link> #
			</h3>
			<blockquote>
				<p>
					How to initialize your form data from any slice of the Redux state.
				</p>
			</blockquote>
			<hr />
			<h3>
				<Link to="/form/nested">Nested Form</Link> #
			</h3>
			<blockquote>
				<p>How to create and manipulate arrays of fields.</p>
			</blockquote>
			<hr />
			<h3>
				<Link to="/form/wizard">Wizard Form</Link> #
			</h3>
			<blockquote>
				<p>How to create a multi-page "wizard" form.</p>
			</blockquote>
			<hr />
		</div>
	);
};

// export { default as SimpleForm } from "./simple";
// export { default as Validation } from "./validation";
// export { default as Submit } from "./submit";
// export { default as AsyncValidate } from "./async-change";
export { default as InitialState } from "./initial-state";
// export { default as Nested } from "./nested";
// export { default as Wizard } from "./wizard";
