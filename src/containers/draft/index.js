import React from "react";
import { connect } from "react-redux";
import { Mentions } from "../../components";
import { getMentions } from "../../store";

class Draft extends React.Component {
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

		return (
			<div>
				<h2>Mentions Example</h2>
				<Mentions mentions={mentions.data} />
			</div>
		);
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

export default connect(mapStateToProps, mapDispatchToProps)(Draft);
