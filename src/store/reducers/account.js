import { LOAD_ACCOUNT } from "../actions";

export default (state = {}, action) => {
	switch (action.type) {
		case LOAD_ACCOUNT:
			return {
				...state,
				data: action.data
			};

		default:
			return {
				...state
			};
	}
};
