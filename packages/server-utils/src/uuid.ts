import crypto from 'crypto';

export const uuid = () => crypto.randomBytes(16).toString('hex');
