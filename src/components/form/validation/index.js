import React from "react";
import { Form, Field } from "react-final-form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
	await sleep(300);
	window.alert(JSON.stringify(values, 0, 2));
};

const required = value => (value ? undefined : "Required");
const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);
const minValue = min => value =>
	isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
const composeValidators = (...validators) => value =>
	validators.reduce((error, validator) => error || validator(value), undefined);

const simpleMemoize = fn => {
	let lastArg;
	let lastResult;
	return arg => {
		if (!lastArg || arg !== lastArg) {
			lastArg = arg;
			lastResult = fn(arg);
		}
		return lastResult;
	};
};

const usernameAvailable = simpleMemoize(async value => {
	if (!value) {
		return "Required";
	}
	await sleep(400);
	if (
		~["john", "paul", "george", "ringo"].indexOf(value && value.toLowerCase())
	) {
		return "Username taken!";
	}
});

const FieldLevelValidationForm = () => (
	<Form
		onSubmit={onSubmit}
		render={({
			handleSubmit,
			reset,
			submitting,
			pristine,
			validating,
			values
		}) => (
			<div class="row">
				<div className="col-md-12">
					<h2>Asynchronous Field-Level Validation</h2>
					<hr />
				</div>
				<form onSubmit={handleSubmit}>
					<div className="col-md-8">
						<Field name="username" validate={usernameAvailable}>
							{({ input, meta }) => (
								<div className="form-group">
									<label>Username</label>
									<input
										{...input}
										className="form-control"
										type="text"
										placeholder="Username"
										autoComplete="off"
									/>
									<span className="text-danger">
										{meta.error && meta.touched && <span>{meta.error}</span>}
									</span>
									{validating && <div>Loading</div>}
								</div>
							)}
						</Field>
						<Field name="lastName" validate={required}>
							{({ input, meta }) => (
								<div className="form-group">
									<label>Last Name</label>
									<input
										{...input}
										className="form-control"
										type="text"
										placeholder="Last Name"
										autoComplete="off"
									/>
									<span className="text-danger">
										{meta.error && meta.touched && <span>{meta.error}</span>}
									</span>
								</div>
							)}
						</Field>
						<Field
							name="age"
							validate={composeValidators(required, mustBeNumber, minValue(18))}
						>
							{({ input, meta }) => (
								<div className="form-group">
									<label>Age</label>
									<input
										{...input}
										className="form-control"
										type="text"
										placeholder="Age"
										autoComplete="off"
									/>
									<span className="text-danger">
										{meta.error && meta.touched && <span>{meta.error}</span>}
									</span>
								</div>
							)}
						</Field>
						<div className="buttons">
							<button type="submit" disabled={submitting}>
								Submit
							</button>
							<button
								type="button"
								onClick={reset}
								disabled={submitting || pristine}
							>
								Reset
							</button>
						</div>
					</div>
					<div className="col-md-4">
						<pre>{JSON.stringify(values, 0, 2)}</pre>
					</div>
				</form>
			</div>
		)}
	/>
);

export default FieldLevelValidationForm;
