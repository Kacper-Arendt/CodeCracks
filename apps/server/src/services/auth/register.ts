import { Request, Response } from 'express';
import { hash } from 'server-utils';
import * as console from 'console';

// MODELS
import { createUser, findUserByEmail } from 'src/models/user';

export const register = async (req: Request, res: Response) => {
	try {
		const { password, email } = req.body;

		if (!password || !email) return res.status(404).json({ error: 'Data not provided' });

		const existingUser = await findUserByEmail(email);

		if (existingUser) return res.status(403).json({ error: 'Email already exists' });

		const passwordHash = await hash(password);

		if (!passwordHash) return res.status(400).json({ error: 'Error hashing password' });

		const result = await createUser({ email, hash: passwordHash });

		res.json({ id: result.id });
	} catch (e) {
		console.log(e);
		res.status(500).json({ error: 'The server cannot create the user' });
	}
};
