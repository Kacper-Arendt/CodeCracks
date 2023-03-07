export const generateRandomString = (length = 8) =>
	Math.random()
		.toString(20)
		.substring(2, length + 2);
