import React from "react";
import ReactTable from "react-table";

export const BasicTable = ({ data }) => {
	return (
		<div className="row">
			<div className="col-md-12">
				<h2>Basic With Dynamic Columns</h2>
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
								accessor: "categories"
							},
							{
								Header: "Tagline",
								accessor: "tagline"
							}
						]}
						defaultSorted={[
							{
								id: "id",
								desc: true
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
