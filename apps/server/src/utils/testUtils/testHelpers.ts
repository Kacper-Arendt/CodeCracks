import { createServer } from 'src/server';
import supertest from 'supertest';

export const startServer = async () => await supertest(createServer());
