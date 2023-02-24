import { Request, Response } from 'express';
import { hash } from 'server-utils';

import { PrismaClient } from 'prisma/client';
const prisma = new PrismaClient();

export const register = async (req: Request, res: Response) => {
	try {
		const { password, email } = req.body;

		if (!password || !email) return res.status(404).json({ error: 'Data not provided' });

		const existingUser = await prisma.user.findFirst({
			where: { email },
		});

		if (existingUser) return res.status(404).json({ error: 'Email already exists' });

		const passwordHash = await hash(password);

		const result = await prisma.user.create({
			data: {
				hash: passwordHash,
				email,
			},
		});

		res.json({ id: result.id });
	} catch (e) {
		console.log(e);
		res.status(500).json({ error: 'The server cannot create the user' });
	}
};
