import React from "react";
import { Field } from "react-final-form";
import Wizard from "./Wizard";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
	await sleep(300);
	window.alert(JSON.stringify(values, 0, 2));
};

const Error = ({ name }) => (
	<Field
		name={name}
		subscribe={{ touched: true, error: true }}
		render={({ meta: { touched, error } }) =>
			touched && error ? <span>{error}</span> : null
		}
	/>
);

const required = value => (value ? undefined : "Required");

const WizardForm = () => (
	<div class="row">
		<div className="col-md-12">
			<h2>Wizard Form</h2>
			<hr />
		</div>

		<div className="col-md-12">
			<Wizard
				initialValues={{ employed: true, stooge: "larry" }}
				onSubmit={onSubmit}
			>
				<Wizard.Page>
					<div className="form-group">
						<label>First Name</label>
						<Field
							name="firstName"
							component="input"
							type="text"
							className="form-control"
							placeholder="First Name"
							autoComplete="off"
							validate={required}
						/>
						<Error name="firstName" />
					</div>
					<div className="form-group">
						<label>Last Name</label>
						<Field
							name="lastName"
							component="input"
							type="text"
							autoComplete="off"
							className="form-control"
							placeholder="Last Name"
							validate={required}
						/>
						<Error name="lastName" />
					</div>
				</Wizard.Page>
				<Wizard.Page
					validate={values => {
						const errors = {};
						if (!values.email) {
							errors.email = "Required";
						}
						if (!values.favoriteColor) {
							errors.favoriteColor = "Required";
						}
						return errors;
					}}
				>
					<div className="form-group">
						<label>Email</label>
						<Field
							name="email"
							className="form-control"
							component="input"
							autoComplete="off"
							type="email"
							placeholder="Email"
						/>
						<Error name="email" />
					</div>
					<div className="form-group">
						<label>Favorite Color</label>
						<Field
							className="form-control"
							name="favoriteColor"
							component="select"
						>
							<option />
							<option value="#ff0000">
								<span role="img" aria-label="Green">
									❤️
								</span>{" "}
								Red
							</option>
							<option value="#00ff00">
								<span role="img" aria-label="Green">
									💚
								</span>{" "}
								Green
							</option>
							<option value="#0000ff">
								<span role="img" aria-label="Green">
									💙
								</span>{" "}
								Blue
							</option>
						</Field>
						<Error name="favoriteColor" />
					</div>
				</Wizard.Page>
				<Wizard.Page
					validate={values => {
						const errors = {};
						if (!values.toppings) {
							errors.toppings = "Required";
						} else if (values.toppings.length < 2) {
							errors.toppings = "Choose more";
						}
						return errors;
					}}
				>
					<div className="form-group">
						<label>Toppings</label>
						<Field
							className="form-control"
							name="toppings"
							component="select"
							multiple
						>
							<option value="ham">
								<span role="img" aria-label="Green">
									🐷 Ham
								</span>
							</option>
							<option value="mushrooms">
								<span role="img" aria-label="Green">
									🍄 Mushrooms
								</span>
							</option>
							<option value="cheese">
								<span role="img" aria-label="Green">
									🧀 Cheese
								</span>
							</option>
							<option value="chicken">
								<span role="img" aria-label="Green">
									🐓 Chicken
								</span>
							</option>
							<option value="pineapple">
								<span role="img" aria-label="Green">
									🍍 Pinapple
								</span>
							</option>
						</Field>
						<Error name="toppings" />
					</div>
					<div className="form-group">
						<label>Notes</label>
						<Field
							className="form-control"
							name="notes"
							autoComplete="off"
							component="textarea"
							placeholder="Notes"
						/>
						<Error name="notes" />
					</div>
				</Wizard.Page>
			</Wizard>
		</div>
	</div>
);

export default WizardForm;
