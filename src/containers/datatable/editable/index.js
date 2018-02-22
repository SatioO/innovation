import React, { Component } from "react";
import ReactTable from "react-table";

export class Editable extends Component {
	constructor() {
		super();
		this.renderEditable = this.renderEditable.bind(this);
	}

	renderEditable(cellInfo) {
		return (
			<div
				style={{ backgroundColor: "#fafafa" }}
				contentEditable
				suppressContentEditableWarning
				onBlur={e => {
					console.log(e);
				}}
				dangerouslySetInnerHTML={{
					__html: this.props.data.items[cellInfo.index][cellInfo.column.id]
				}}
			/>
		);
	}

	render() {
		const { data } = this.props;
		return (
			<div className="row">
				<div className="col-md-12">
					<h2>Inline Editing</h2>
					<hr />
					{!!data ? (
						<ReactTable
							data={data.items}
							columns={[
								{
									Header: "ID",
									accessor: "id",
									Cell: this.renderEditable
								},
								{
									Header: "Created Date",
									accessor: "_firstCreatedTimestamp"
								},
								{
									Header: "Categories",
									accessor: "categories",
									Cell: this.renderEditable,
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
	}
}
