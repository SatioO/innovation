import { GET_MENTIONS } from "../actions";

const initialState = {
	isLoaded: false,
	isLoading: false,
	data: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_MENTIONS:
			return {
				...state,
				data: action.payload.data.profiles.items
			};

		default:
			return {
				...state
			};
	}
};
