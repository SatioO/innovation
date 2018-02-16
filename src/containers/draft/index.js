import React from "react";
import { connect } from "react-redux";
import {
	Mentions,
	Emoji,
	// Images,
	Inline,
	Hashtag,
	SideToolbar,
	Videos
} from "../../components";
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

	// shouldComponentUpdate(nextProps, nextState) {
	// 	const { mentions } = this.props;
	// 	return nextProps.mentions !== mentions;
	// }

	render() {
		const { mentions } = this.props;

		return (
			<div>
				<h2>Mentions Demo</h2>
				<Mentions mentions={mentions.data} />
				<h2>Emojis Demo</h2>
				<Emoji />
				<br />
				<h2>Hashtag Demo</h2>
				<Hashtag />
				<h2>Inline Demo</h2>
				<Inline />
				<h2>Side Toolbar Demo</h2>
				<SideToolbar />
				<h2>Videos Demo</h2>
				<Videos />
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
