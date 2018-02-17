import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import { connect } from "react-redux";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<div className="form-group">
		<label>{label}</label>
		<div>
			<input
				className="form-control"
				{...input}
				type={type}
				placeholder={label}
			/>
			{touched && error && <span>{error}</span>}
		</div>
	</div>
);

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
	<div>
		<button type="button" onClick={() => fields.push({})}>
			Add Member
		</button>
		{submitFailed && error && <span>{error}</span>}
		{fields.map((member, index) => (
			<div
				className="card"
				key={index}
				style={{ padding: "20px", margin: "10px" }}
			>
				<div className="card-block">
					<h4>Member #{index + 1}</h4>
					<Field
						name={`${member}.firstName`}
						type="text"
						component={renderField}
						label="First Name"
					/>
					<Field
						name={`${member}.lastName`}
						type="text"
						component={renderField}
						label="Last Name"
					/>
					<button type="button" onClick={() => fields.remove(index)}>
						Remove Member
					</button>
				</div>
			</div>
		))}
	</div>
);

let FieldArraysForm = props => {
	console.log(props);
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<div className="row">
			<div className="col-md-12">
				<h2>Nested Form</h2>
				<hr />
			</div>
			<form className="col-md-8" onSubmit={handleSubmit}>
				<div className="col-md-12">
					<Field
						name="clubName"
						type="text"
						component={renderField}
						label="Club Name"
					/>
				</div>
				<div className="col-md-12">
					<FieldArray name="members" component={renderMembers} />
				</div>
				<div className="col-md-12">
					<br />
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
			<div className="col-md-4">
				<pre>
					{JSON.stringify(
						props.fieldArrays ? props.fieldArrays.values : undefined,
						null,
						2
					)}
				</pre>
			</div>
		</div>
	);
};

FieldArraysForm = reduxForm({
	form: "fieldArrays", // a unique identifier for this form
	validate
})(FieldArraysForm);

FieldArraysForm = connect(state => {
	return state.form;
})(FieldArraysForm);

export default FieldArraysForm;
