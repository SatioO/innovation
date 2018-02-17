import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { loadAccount } from "../../../store";
const data = {
	// used to populate "account" reducer when "Load" is clicked
	firstName: "Jane",
	lastName: "Doe",
	age: "42",
	sex: "female",
	employed: true,
	favoriteColor: "Blue",
	bio: "Born to write amazing Redux code."
};
const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

let InitializeFromStateForm = props => {
	const { load } = props;
	return (
		<div className="row">
			<div className="col-md-12">
				<h2>Initialize From State Form</h2>
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
						<label>Age</label>
						<Field
							name="age"
							className="form-control"
							component="input"
							type="number"
							placeholder="Age"
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
						<div>
							<Field
								className="form-control"
								name="favoriteColor"
								component="select"
							>
								<option value="">Select a color...</option>
								{colors.map(colorOption => (
									<option value={colorOption} key={colorOption}>
										{colorOption}
									</option>
								))}
							</Field>
						</div>
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
						<label>Bio</label>

						<Field className="form-control" name="bio" component="textarea" />
					</div>
				</form>
			</div>
			<div className="col-md-4">
				<div>
					<button type="button" onClick={() => load(data)}>
						Load State
					</button>
				</div>
				<br />
				<pre>
					{JSON.stringify(
						props.initialValues ? props.initialValues : undefined,
						null,
						2
					)}
				</pre>
			</div>
		</div>
	);
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
	form: "initializeFromState" // a unique identifier for this form
})(InitializeFromStateForm);

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(
	state => ({
		initialValues: state.account.data
	}),
	{ load: loadAccount } // bind account loading action creator
)(InitializeFromStateForm);

export default InitializeFromStateForm;
