import React from "react";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
	await sleep(300);
	window.alert(JSON.stringify(values, 0, 2));
};

const FieldArraysForm = () => (
	<div>
		<Form
			onSubmit={onSubmit}
			mutators={{
				...arrayMutators
			}}
			render={({
				handleSubmit,
				mutators: { push, pop }, // injected from final-form-arrays above
				pristine,
				reset,
				submitting,
				values
			}) => {
				return (
					<div class="row">
						<div className="col-md-12">
							<h2>Array Fields</h2>
							<hr />
						</div>

						<form onSubmit={handleSubmit}>
							<div className="col-md-8">
								<div className="form-group">
									<label>Company</label>
									<Field
										name="company"
										className="form-control"
										autoComplete="off"
										component="input"
									/>
								</div>
								<div className="buttons">
									<button
										type="button"
										onClick={() => push("customers", undefined)}
									>
										Add Customer
									</button>
									<button type="button" onClick={() => pop("customers")}>
										Remove Customer
									</button>
								</div>
								<br />
								<FieldArray className="form-group" name="customers">
									{({ fields }) =>
										fields.map((name, index) => (
											<div className="row" key={name}>
												<label className="col-md-2">
													<h6>Cust. #{index + 1}:</h6>
												</label>
												<label className="col-md-4">
													<Field
														name={`${name}.firstName`}
														component="input"
														autoComplete="off"
														className="form-control"
														placeholder="First Name"
													/>
												</label>
												<label className="col-md-4">
													<Field
														name={`${name}.lastName`}
														component="input"
														autoComplete="off"
														className="form-control"
														placeholder="Last Name"
													/>
												</label>
												<span
													onClick={() => fields.remove(index)}
													style={{ cursor: "pointer" }}
												>
													❌
												</span>
											</div>
										))
									}
								</FieldArray>

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
							</div>
							<div className="col-md-4">
								<pre>{JSON.stringify(values, 0, 2)}</pre>
							</div>
						</form>
					</div>
				);
			}}
		/>
	</div>
);

export default FieldArraysForm;
