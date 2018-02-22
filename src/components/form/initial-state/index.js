import React from "react";
import { Form, Field } from "react-final-form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const load = async () => {
	await sleep(2000);
	return {
		firstName: "Vaibhav",
		lastName: "Satam",
		email: "vaibhav.satam@accionlabs.com",
		toppings: ["ham", "mushrooms"]
	};
};

const onSubmit = async values => {
	await sleep(300);
	window.alert(JSON.stringify(values, 0, 2));
};

class InitializeFromStateForm extends React.Component {
	state = { data: {} };

	async componentDidMount() {
		this.setState({ loading: true });
		const data = await load();
		this.setState({ loading: false, data });
	}

	render() {
		return (
			<div class="row">
				<div className="col-md-12">
					<h2>Simple Form</h2>
					<hr />
				</div>
				<Form
					onSubmit={onSubmit}
					initialValues={this.state.data}
					render={({ handleSubmit, pristine, reset, submitting, values }) => {
						return (
							<div>
								<div className="col-md-8">
									<form onSubmit={handleSubmit}>
										{this.state.loading && <div className="loading" />}
										<div className="form-group">
											<label>First Name</label>
											<Field
												name="firstName"
												component="input"
												autoComplete="off"
												className="form-control"
												type="text"
												placeholder="First Name"
											/>
										</div>
										<div className="form-group">
											<label>Last Name</label>
											<Field
												name="lastName"
												className="form-control"
												component="input"
												autoComplete="off"
												type="text"
												placeholder="Last Name"
											/>
										</div>
										<div className="form-group">
											<label>Email</label>
											<Field
												name="email"
												component="input"
												className="form-control"
												autoComplete="off"
												type="email"
												placeholder="Email"
											/>
										</div>
										<div className="form-group">
											<label>Favorite Color</label>
											<Field
												name="favoriteColor"
												className="form-control"
												autoComplete="off"
												component="select"
											>
												<option />
												<option value="#ff0000">
													<span role="img" aria-label="red">
														❤️ Red
													</span>
												</option>
												<option value="#00ff00">
													<span role="img" aria-label="Green">
														💚 Green
													</span>
												</option>
												<option value="#0000ff">
													<span role="img" aria-label="Blue">
														💙 Blue
													</span>
												</option>
											</Field>
										</div>
										<div className="form-group">
											<label>Toppings</label>
											<Field
												name="toppings"
												className="form-control"
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
										</div>
										<div className="form-group">
											<label>Best Stooge?</label>
											<div className="form-check">
												<label className="form-check-label">
													<Field
														name="stooge"
														component="input"
														type="radio"
														className="form-check-input"
														value="larry"
													/>{" "}
													Larry&nbsp;
												</label>
												<label className="form-check-label">
													<Field
														name="stooge"
														component="input"
														type="radio"
														className="form-check-input"
														value="moe"
													/>{" "}
													Moe&nbsp;
												</label>
												<label className="form-check-label">
													<Field
														name="stooge"
														component="input"
														type="radio"
														className="form-check-input"
														value="curly"
													/>{" "}
													Curly&nbsp;
												</label>
											</div>
										</div>
										<fieldset className="form-group">
											<label>Sex</label>
											<div className="form-check">
												<label className="form-check-label">
													<Field
														name="sauces"
														component="input"
														type="checkbox"
														value="ketchup"
													/>{" "}
													Ketchup
												</label>
											</div>
											<div className="form-check">
												<label className="form-check-label">
													<Field
														name="sauces"
														component="input"
														type="checkbox"
														value="mustard"
													/>{" "}
													Mustard
												</label>
											</div>
										</fieldset>
										<div className="form-group">
											<label>Notes</label>
											<Field
												name="notes"
												className="form-control"
												component="textarea"
												autoComplete="off"
												placeholder="Notes"
											/>
										</div>
										<div className="buttons">
											<button type="submit" disabled={submitting || pristine}>
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
									</form>
								</div>
								<div className="col-md-4">
									<pre>{JSON.stringify(values, 0, 2)}</pre>
								</div>
							</div>
						);
					}}
				/>
			</div>
		);
	}
}
export default InitializeFromStateForm;
