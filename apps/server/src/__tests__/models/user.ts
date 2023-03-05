import { uuid } from 'server-utils';
import { prismaMock } from 'src/utils/testUtils';
import { createUser } from 'src/models';

const user = { id: 1, email: `${uuid()}@example.com`, hash: uuid() };

describe('Create user', () => {
	test('should create new user', async () => {
		prismaMock.user.create.mockResolvedValue(user);

		await expect(createUser(user)).resolves.toEqual(
			expect.objectContaining({
				email: user.email,
			}),
		);
	});
});
