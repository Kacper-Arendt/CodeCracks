import { startServer } from 'src/utils/testUtils';

describe('server', () => {
	let request: any = {};

	beforeEach(async () => (request = await startServer()));

	it('should return 404 on unknown endpoint', async () => {
		request
			.get('/healthz')
			.expect(404)
			.then((res: any) => {
				expect(res.body.error).toBe('unknown endpoint');
			});
	});
});
