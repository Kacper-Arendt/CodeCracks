import express from 'express';

// MIDDLEWARES
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from 'src/utils/errorHandler';

// ROUTES
import { routes } from 'src/routes';
import { register } from 'src/services/auth';

export const createServer = () => {
	const app = express();

	app.use(cors());
	app.disable('x-powered-by');
	app.use(morgan('dev'));
	app.use(helmet());
	app.use(express.urlencoded());
	app.use(express.json());

	app.all('*', function (req, res, next) {
		res.header('Access-Control-Allow-Origin', 'URLs to trust of allow');
		res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		if ('OPTIONS' == req.method) {
			res.sendStatus(200);
		} else {
			next();
		}
	});

	app.post('/register', register);
	app.use('/', routes);

	app.get('*', (req, res) => {
		res.status(404).send({ error: 'unknown endpoint' });
	});

	app.use(errorHandler);

	return app;
};
