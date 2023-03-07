import { PrismaClient } from 'prisma/client';
const prisma = new PrismaClient();

export const findUserByEmail = async (email: string) => await prisma.user.findFirst({ where: { email } });

export const createUser = async ({ hash, email }: { hash: string; email: string }) =>
	await prisma.user.create({ data: { hash, email } });
