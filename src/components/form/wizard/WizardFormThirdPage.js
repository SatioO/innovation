import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

const renderColorSelector = ({ input, meta: { touched, error } }) => (
	<div className="form-group">
		<select className="form-control" {...input}>
			<option value="">Select a color...</option>
			{colors.map(val => (
				<option value={val} key={val}>
					{val}
				</option>
			))}
		</select>
		{touched && error && <span>{error}</span>}
	</div>
);

const WizardFormThirdPage = props => {
	const { handleSubmit, pristine, previousPage, submitting } = props;
	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label>Favorite Color</label>
				<Field name="favoriteColor" component={renderColorSelector} />
			</div>
			<div className="form-check">
				<label className="form-check-label" htmlFor="employed">
					<Field
						name="employed"
						id="employed"
						component="input"
						type="checkbox"
					/>
					&nbsp;Employed
				</label>
			</div>

			<div className="form-group">
				<label>Notes</label>
				<div>
					<Field
						className="form-control"
						name="notes"
						component="textarea"
						placeholder="Notes"
					/>
				</div>
			</div>
			<div>
				<button type="button" className="previous" onClick={previousPage}>
					Previous
				</button>
				<button type="submit" disabled={pristine || submitting}>
					Submit
				</button>
			</div>
		</form>
	);
};
export default reduxForm({
	form: "wizard", //Form name is same
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
	validate
})(WizardFormThirdPage);
