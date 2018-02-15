export const GET_MENTIONS = "GET_MENTIONS";
export const getMentions = () => ({
	type: GET_MENTIONS,
	promise: client => client.get("/loadAuth")
});
