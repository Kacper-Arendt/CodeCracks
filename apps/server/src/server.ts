import express from 'express';

// MIDDLEWARES
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from 'src/utils/errorHandler';
import { unknownEndpoint } from 'src/utils/unknownEndpoint';

export const createServer = () => {
	const app = express();

	app
		.disable('x-powered-by')
		.use(morgan('dev'))
		.use(helmet())
		.use(cors())
		.use(express.urlencoded())
		.use(express.json());

	app.get('', (req: any, res: any) => {
		return res.json({
			message: `hello żółtko`,
		});
	});

	app.use(errorHandler);
	app.use(unknownEndpoint);

	return app;
};
