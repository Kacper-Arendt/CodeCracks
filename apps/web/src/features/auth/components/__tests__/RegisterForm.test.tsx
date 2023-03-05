import { RegisterForm } from 'src/features/auth/components/RegisterForm';
import { customRender, screen } from 'src/tests/testUtils';

describe('Register form', () => {
	it('renders form', () => {
		customRender(<RegisterForm />);

		screen.debug();
	});
});
