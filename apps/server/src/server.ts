import express from 'express';

// MIDDLEWARES
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from 'src/utils/errorHandler';
import { unknownEndpoint } from 'src/utils/unknownEndpoint';

// ROUTES
import { routes } from 'src/routes';

export const createServer = () => {
	const app = express();

	app
		.disable('x-powered-by')
		.use(morgan('dev'))
		.use(helmet())
		.use(cors())
		.use(express.urlencoded())
		.use(express.json());

	app.use('/', routes);

	app.use(errorHandler);
	app.use(unknownEndpoint);

	return app;
};
