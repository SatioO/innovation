import React from "react";
import { Nested } from "../../../components";

export default () => {
	return (
		<Nested
			handleSubmit={e => {
				e.preventDefault();
				console.log(e);
			}}
		/>
	);
};
