export const GET_MENTIONS = "GET_MENTIONS";
export const getMentions = query => ({
	type: GET_MENTIONS,
	promise: client => client.post("/", query)
});
