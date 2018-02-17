import React from "react";
import { Field, reduxForm } from "redux-form";
import submit from "./submit";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<div className="form-group">
		<label>{label}</label>
		<div>
			<input
				{...input}
				className="form-control"
				placeholder={label}
				type={type}
			/>
		</div>
	</div>
);

const SubmitValidationForm = props => {
	const { error, handleSubmit, pristine, reset, submitting } = props;
	return (
		<div>
			<div className="col-md-12">
				<h2>Submit Validation Form</h2>
				<hr />
			</div>
			{error ? (
				<div class="alert alert-danger" role="alert">
					{error && <strong>{error}</strong>} User does not exist
				</div>
			) : (
				""
			)}
			<form onSubmit={handleSubmit(submit)}>
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
						Log In
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
	form: "submitValidation" // a unique identifier for this form
})(SubmitValidationForm);
