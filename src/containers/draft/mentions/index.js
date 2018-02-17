import React, { Component } from "react";
import { connect } from "react-redux";
import { getMentions } from "../../../store";
import { Mention } from "../../../components";

class Mentions extends Component {
	componentWillMount() {
		this.props.getMentions({
			query: `{
				profiles(category:"leadership") {
					total
					items {
						name
					}
				}
			}`
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		const { mentions } = this.props;
		return nextProps.mentions !== mentions;
	}

	render() {
		const { mentions } = this.props;
		return <Mention mentions={mentions.data} />;
	}
}

const mapStateToProps = state => {
	return {
		mentions: state.mentions
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getMentions: query => {
			dispatch(getMentions(query));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Mentions);
