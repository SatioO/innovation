import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

let SimpleForm = props => {
	const { pristine, reset, submitting } = props;

	return (
		<div className="row">
			<div className="col-md-12">
				<h2>Simple Form</h2>
				<hr />
			</div>
			<div className="col-md-8">
				<form>
					<div className="form-group">
						<label>First Name</label>

						<Field
							name="firstName"
							component="input"
							type="text"
							className="form-control"
							placeholder="First Name"
						/>
					</div>
					<div className="form-group">
						<label>Last Name</label>

						<Field
							name="lastName"
							component="input"
							type="text"
							className="form-control"
							placeholder="Last Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>

						<Field
							name="email"
							component="input"
							type="email"
							className="form-control"
							placeholder="Email"
						/>
					</div>
					<fieldset className="form-group">
						<label>Sex</label>
						<div className="form-check">
							<label className="form-check-label">
								<Field
									name="sex"
									className="form-check-input"
									component="input"
									type="radio"
									value="male"
								/>{" "}
								Male
							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label">
								<Field
									name="sex"
									className="form-check-input"
									component="input"
									type="radio"
									value="female"
								/>{" "}
								Female
							</label>
						</div>
					</fieldset>
					<div className="form-group">
						<label>Favorite Color</label>

						<Field
							className="form-control"
							name="favoriteColor"
							component="select"
						>
							<option />
							<option value="ff0000">Red</option>
							<option value="00ff00">Green</option>
							<option value="0000ff">Blue</option>
						</Field>
					</div>
					<div className="form-check">
						<label className="form-check-label" htmlFor="employed">
							<Field
								name="employed"
								id="employed"
								className="form-check-input"
								component="input"
								type="checkbox"
							/>
							Employed
						</label>
					</div>
					<div className="form-group">
						<label>Notes</label>

						<Field className="form-control" name="notes" component="textarea" />
					</div>

					<button type="submit" disabled={pristine || submitting}>
						Submit
					</button>
					<button
						type="button"
						disabled={pristine || submitting}
						onClick={reset}
					>
						Clear Values
					</button>
				</form>
			</div>
			<div className="col-md-4">
				<pre>
					{JSON.stringify(
						props.simple ? props.simple.values : undefined,
						null,
						2
					)}
				</pre>
			</div>
		</div>
	);
};

SimpleForm = reduxForm({
	form: "simple" // a unique identifier for this form
})(SimpleForm);

SimpleForm = connect(state => {
	return state.form;
})(SimpleForm);

export default SimpleForm;
