import React from "react";
import { Validation } from "../../../components";

export default () => {
	return (
		<Validation
			handleSubmit={e => {
				e.preventDefault();
				console.log(e);
			}}
		/>
	);
};
