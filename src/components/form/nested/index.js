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
			Add Employee
		</button>
		{submitFailed && error && <span>{error}</span>}
		{fields.map((employee, index) => (
			<div
				className="card"
				key={index}
				style={{ padding: "20px", margin: "10px" }}
			>
				<div className="card-block">
					<h4>Employee #{index + 1}</h4>
					<Field
						name={`${employee}.firstName`}
						type="text"
						component={renderField}
						label="First Name"
					/>
					<Field
						name={`${employee}.lastName`}
						type="text"
						component={renderField}
						label="Last Name"
					/>
					<button type="button" onClick={() => fields.remove(index)}>
						Remove Employee
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
				<div className="card">
					<div className="card-block" style={{ padding: "10px" }}>
						<div className="col-md-12">
							<Field
								name="CompanyName"
								type="text"
								component={renderField}
								label="Company Name"
							/>
						</div>
						<div className="col-md-12">
							<FieldArray name="employees" component={renderMembers} />
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
					</div>
				</div>
			</form>
			<div className="col-md-4">
				<div className="card">
					<div className="card-block" style={{ padding: "10px" }}>
						<pre>
							{JSON.stringify(
								props.fieldArrays ? props.fieldArrays.values : undefined,
								null,
								2
							)}
						</pre>
					</div>
				</div>
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
