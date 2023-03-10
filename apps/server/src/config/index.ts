import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT;
export const DATABASE_URL = process.env.DATABASE_URL;
