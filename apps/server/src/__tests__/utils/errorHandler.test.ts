import { errorHandler } from 'src/utils/errorHandler';

describe('errorHandler', () => {
	const res: any = {
		json: jest.fn(),
		status: jest.fn().mockReturnThis(),
	};
	const error = { name: 'BadRequestError' };

	it('Should call next with an error', () => {
		const mockNext = jest.fn();
		errorHandler(error, res, mockNext);
		expect(mockNext).toHaveBeenCalledWith(error);
	});
});
