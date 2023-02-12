import { Response } from 'express';

export const unknownEndpoint = (res: Response) => {
	res.status(404).send({ error: 'unknown endpoint' });
};
