import { Router } from 'express';
import { register } from 'src/services/auth';

export const authRouter = Router();

authRouter.post('/register', register);
