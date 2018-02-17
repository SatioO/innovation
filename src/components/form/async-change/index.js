import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import asyncValidate from "./asyncValidate";

const renderField = ({
	input,
	label,
	type,
	meta: { asyncValidating, touched, error }
}) => (
	<div>
		<label>{label}</label>
		<div
			className={asyncValidating ? "async-validating form-group" : "form-group"}
		>
			<input
				className="form-control"
				{...input}
				type={type}
				placeholder={label}
			/>
			<small className="form-text" style={{ color: "red" }}>
				{touched && error && <span>{error}</span>}
			</small>
		</div>
	</div>
);

const AsyncValidationForm = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<div>
			<div className="col-md-12">
				<h2>Asynchronous Change Validation Form</h2>
				<hr />
			</div>
			<form onSubmit={handleSubmit}>
				<Field
					name="username"
					type="text"
					component={renderField}
					label="Username"
				/>
				<Field
					name="password"
					type="password"
					component={renderField}
					label="Password"
				/>
				<div>
					<button type="submit" disabled={submitting}>
						Sign Up
					</button>
					<button
						type="button"
						disabled={pristine || submitting}
						onClick={reset}
					>
						Clear Values
					</button>
				</div>
			</form>
		</div>
	);
};

export default reduxForm({
	form: "asyncValidation", // a unique identifier for this form
	validate,
	asyncValidate,
	asyncChangeFields: ["username"]
})(AsyncValidationForm);
