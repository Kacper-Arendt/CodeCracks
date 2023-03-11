import { Router } from 'express';
import { authRouter } from 'src/routes/auth';

export const routes = Router();

routes.use('auth', authRouter);
