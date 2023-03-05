import { uuid } from 'server-utils';
import { startServer } from 'src/__tests__/helpers';

describe('register route', () => {
	let request: any = {};

	beforeEach(async () => (request = startServer()));

	const randomString = uuid();
	const newUser = { email: `${randomString}@example.com`, password: 'admin' };

	it('should return 404, data not provided', async () => {
		await request
			.post('/auth/register')
			.send()
			.expect(404)
			.then((response: any) => {
				expect(response.body).toEqual({
					error: 'Data not provided',
				});
			});
	});

	it('should create user', async () => {
		await request
			.post('/auth/register')
			.send(newUser)
			.expect(200)
			.then((response: any) => {
				expect(response.body).toHaveProperty('id');
			});
	});

	it('should return 403 when user exists', async () => {
		await request.post('/auth/register').send(newUser);

		await request
			.post('/auth/register')
			.send(newUser)
			.expect(403)
			.then((response: any) => {
				expect(response.body).toHaveProperty('error');
			});
	});
});
