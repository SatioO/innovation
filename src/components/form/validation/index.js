import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
	value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
export const minLength = min => value =>
	value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
const number = value =>
	value && isNaN(Number(value)) ? "Must be a number" : undefined;
const minValue = min => value =>
	value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(18);
const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? "Invalid email address"
		: undefined;
const tooOld = value =>
	value && value > 65 ? "You might be too old for this" : undefined;
const aol = value =>
	value && /.+@aol\.com/.test(value)
		? "Really? You still use AOL for your email?"
		: undefined;
const alphaNumeric = value =>
	value && /[^a-zA-Z0-9 ]/i.test(value)
		? "Only alphanumeric characters"
		: undefined;
export const phoneNumber = value =>
	value && !/^(0|[1-9][0-9]{9})$/i.test(value)
		? "Invalid phone number, must be 10 digits"
		: undefined;

const renderField = ({
	input,
	label,
	type,
	meta: { touched, error, warning }
}) => (
	<div>
		<label>{label}</label>
		<div>
			<input
				{...input}
				placeholder={label}
				className="form-control"
				type={type}
			/>
			<small className="form-text" style={{ color: "red" }}>
				{touched &&
					((error && <span>{error}</span>) ||
						(warning && <span>{warning}</span>))}
			</small>
		</div>
	</div>
);

let FieldLevelValidationForm = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	console.log(props);
	return (
		<div className="row">
			<div className="col-md-12">
				<h2>Field Level Validation Form</h2>
				<hr />
			</div>
			<div className="col-md-8">
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<Field
							name="username"
							type="text"
							component={renderField}
							label="Username"
							validate={[required, maxLength15, minLength2]}
							warn={alphaNumeric}
						/>
					</div>
					<div className="form-group">
						<Field
							name="email"
							type="email"
							component={renderField}
							label="Email"
							className="form-control"
							validate={email}
							warn={aol}
						/>
					</div>
					<div className="form-group">
						<Field
							name="age"
							type="number"
							component={renderField}
							label="Age"
							className="form-control"
							validate={[required, number, minValue18]}
							warn={tooOld}
						/>
					</div>
					<div className="form-group">
						<Field
							name="phone"
							type="number"
							className="form-control"
							component={renderField}
							label="Phone number"
							validate={[required, phoneNumber]}
						/>
					</div>
					<div>
						<button type="submit" disabled={submitting}>
							Submit
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
			<div className="col-md-4">
				<pre>
					<div>
						Values:
						{JSON.stringify(
							props.fieldLevelValidation
								? props.fieldLevelValidation.values
								: undefined,
							null,
							2
						)}
					</div>
					<div>
						Valid:
						{JSON.stringify(
							props.fieldLevelValidation ? props.valid : undefined,
							null,
							2
						)}
					</div>
				</pre>
			</div>
		</div>
	);
};

FieldLevelValidationForm = reduxForm({
	form: "fieldLevelValidation" // a unique identifier for this form
})(FieldLevelValidationForm);

FieldLevelValidationForm = connect(state => {
	return state.form;
})(FieldLevelValidationForm);

export default FieldLevelValidationForm;
