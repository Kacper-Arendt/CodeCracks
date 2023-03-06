import { RegisterForm } from 'src/features/auth/components/RegisterForm';
import { customRender, screen } from 'src/tests/testUtils';

describe('Register form', () => {
	beforeEach(() => {
		customRender(<RegisterForm />);
	});

	it('renders form', () => {
		expect(screen.getByRole('form')).toBeInTheDocument();
		screen.debug();
	});

	it('renders email field', () => {
		const emailInput = screen.getByRole('textbox', { name: /email/i });

		expect(emailInput).toBeInTheDocument();
		expect(emailInput).toHaveAttribute('type', 'text');

		screen.debug();
	});

	it('renders password field', () => {
		const passwordInput = screen.getByPlaceholderText('Enter your password');

		expect(passwordInput).toBeInTheDocument();
		expect(passwordInput).toHaveAttribute('type', 'password');

		screen.debug();
	});

	it('renders submit button', () => {
		const submitButton = screen.getByRole('button', { name: /submit/i });

		expect(submitButton).toBeInTheDocument();
		expect(submitButton).toHaveAttribute('type', 'submit');

		screen.debug();
	});
});
