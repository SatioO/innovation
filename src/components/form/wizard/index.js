import React, { Component } from "react";
import PropTypes from "prop-types";
import WizardFormFirstPage from "./wizardFormFirstPage";
import WizardFormSecondPage from "./wizardFormSecondPage";
import WizardFormThirdPage from "./WizardFormThirdPage";

class WizardForm extends Component {
	constructor(props) {
		super(props);
		this.nextPage = this.nextPage.bind(this);
		this.previousPage = this.previousPage.bind(this);
		this.state = {
			page: 1,
			data: {}
		};
	}
	nextPage() {
		this.setState({ page: this.state.page + 1 });
	}

	previousPage() {
		this.setState({ page: this.state.page - 1 });
	}

	onSubmit(e) {
		this.setState({
			data: e
		});
	}

	render() {
		const { page } = this.state;
		return (
			<div className="row">
				<div className="col-md-12">
					<h2>Wizard Form</h2>
					<hr />
				</div>
				<div className="col-md-8">
					<div className="card">
						<div className="card-block" style={{ padding: "10px" }}>
							{page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
							{page === 2 && (
								<WizardFormSecondPage
									previousPage={this.previousPage}
									onSubmit={this.nextPage}
								/>
							)}
							{page === 3 && (
								<WizardFormThirdPage
									previousPage={this.previousPage}
									onSubmit={this.onSubmit.bind(this)}
								/>
							)}
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card">
						<div className="card-block" style={{ padding: "10px" }}>
							<pre>{JSON.stringify(this.state.data, null, 2)}</pre>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

WizardForm.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default WizardForm;
