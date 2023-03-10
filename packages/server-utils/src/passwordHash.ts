import * as argon2 from 'argon2';

export const hash = async (password: string) => {
	try {
		return await argon2.hash(password);
	} catch (err) {
		console.log(err);
	}
};
