import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

import { BasicTable } from "./basic";
import { CustomWidth } from "./custom-width";
import { Editable } from "./editable";
import { Pivoting } from "./pivoting";

const DemoQuery = gql`
	{
		demos(pageOffset: 0, pageLength: 10000) {
			items {
				id
				_firstCreatedTimestamp
				categories
				tagline
			}
		}
	}
`;

export const Tables = ({ data }) => {
	return (
		<div>
			<BasicTable data={data.demos} />
			<CustomWidth data={data.demos} />
			<Editable data={data.demos} />
			<Pivoting />
		</div>
	);
};

export const DataTable = graphql(DemoQuery)(Tables);
