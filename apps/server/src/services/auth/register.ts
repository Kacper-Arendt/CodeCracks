import { Request, Response } from 'express';
import { hash } from 'server-utils';

export const register = async (req: Request, res: Response) => {
	try {
		const { password, email } = req.body;

		if (!password || !email) return res.status(404).json({ error: 'Data not provided' });

		// const existingUser = await User.findOne({
		// 	where: { email: email },
		// });

		// if (existingUser) return res.status(404).json({ error: 'Email already exists' });

		const passwordHash = await hash(password);

		// const newUser: User = await User.create({ passwordHash, email });

		// return res.status(200).json({ id: newUser.id, email });
	} catch (e) {
		res.status(500).json({ error: 'The server cannot create the user' });
	}
};
