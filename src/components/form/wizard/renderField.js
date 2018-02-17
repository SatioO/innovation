import React from "react";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<div className="form-group">
		<label>{label}</label>
		<div>
			<input
				className="form-control"
				{...input}
				placeholder={label}
				type={type}
			/>
			<small className="form-text" style={{ color: "red" }}>
				{touched && error && <span>{error}</span>}
			</small>
		</div>
	</div>
);

export default renderField;
