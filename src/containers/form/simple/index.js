import React from "react";
import { SimpleForm } from "../../../components";

export default () => {
	return (
		<SimpleForm
			handleSubmit={e => {
				console.log(e);
			}}
		/>
	);
};
