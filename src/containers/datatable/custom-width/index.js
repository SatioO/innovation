import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";

export const CustomWidth = ({ data }) => {
	return (
		<div className="row">
			<div className="col-md-12">
				<h2>Dyanamic column width</h2>
				<hr />
				{!!data ? (
					<ReactTable
						data={data.items}
						columns={[
							{
								Header: "ID",
								accessor: "id"
							},
							{
								Header: "Created Date",
								accessor: "_firstCreatedTimestamp"
							},
							{
								Header: "Categories",
								accessor: "categories",
								width: 140
							},
							{
								Header: "Tagline",
								accessor: "tagline",
								minWidth: 250
							}
						]}
						defaultPageSize={10}
						className="-striped -highlight"
					/>
				) : null}
			</div>
		</div>
	);
};
