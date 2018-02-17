import React from "react";
import { AsyncValidate } from "../../../components";

export default () => {
	return (
		<AsyncValidate
			handleSubmit={e => {
				e.preventDefault();
				console.log(e);
			}}
		/>
	);
};
