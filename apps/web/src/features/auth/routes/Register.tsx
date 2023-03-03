// COMPONENTS
import { AuthLayout } from 'ui';
import { RegisterForm } from 'src/features/auth/components/RegisterForm';

export const Register = () => {
	return (
		<AuthLayout title="Sign Up">
			<RegisterForm />
		</AuthLayout>
	);
};
