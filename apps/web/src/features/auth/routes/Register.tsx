// COMPONENTS
import { AuthLayout } from 'ui';
import { RegisterForm } from 'src/features/auth/components/RegisterForm';

export const Register = () => (
	<AuthLayout title="Sign Up">
		<RegisterForm />
	</AuthLayout>
);
