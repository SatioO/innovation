import React, { Component } from "react";
import { connect } from "react-redux";
import { getMentions } from "../../store";

class Draft extends Component {
	render() {
		return <div />;
	}
}

const mapStateToProps = state => {
	return {
		draft: state.draft
	};
};

const mapDispatchToProps = dispatch => {
	return {
		login: _ => dispatch(getMentions())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Draft);
