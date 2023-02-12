import { Response, NextFunction } from 'express';

export const errorHandler = (error: any, res: Response, next: NextFunction) => {
	console.error(error?.message);

	switch (error?.name) {
		case 'BadRequestError':
			res.status(400).json({
				error: {
					message: 'Bad Request',
				},
			});
			break;
		case 'UnauthorizedError':
			res.status(401).json({
				error: {
					message: 'Unauthorized',
				},
			});
			break;
		case 'JsonWebTokenError':
			res.status(401).json({
				error: {
					message: 'Invalid token',
				},
			});
			break;
		case 'TokenExpiredError':
			res.status(401).json({
				error: {
					message: 'Token expired',
				},
			});
			break;
		case 'ForbiddenError':
			res.status(403).json({
				error: {
					message: 'Forbidden',
				},
			});
			break;
		case 'NotFoundError':
			res.status(404).json({
				error: {
					message: 'Not Found',
				},
			});
			break;
		case 'InternalServerError':
			res.status(500).json({
				error: {
					message: 'Internal Server Error',
				},
			});
			break;
		default:
			res.status(500).json({
				error: {
					message: 'Unknown Error',
				},
			});
			break;
	}

	next(error);
};
