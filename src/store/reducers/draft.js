export const draft = (state = [], action) => {
	switch (action.type) {
		case "ITEMS_FETCH_DATA":
			return action.data;
		default:
			return state;
	}
};
