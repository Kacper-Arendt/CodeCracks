import { hash as bcryptHash } from 'bcrypt';

export const hash = (password: string, saltRounds: number = 10) => bcryptHash(password, saltRounds);
