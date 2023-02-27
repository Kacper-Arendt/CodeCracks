// HOOKS

// MODELS

// COMPONENTS
import { AuthLayout, Input } from 'ui';

// STYLES

export const Register = () => {
	return (
		<AuthLayout>
			<Input name="name" type="text" label="Label" placeholder="placeholder" />
			<Input name="name" type="password" label="Label" placeholder="placeholder" />
		</AuthLayout>
	);
};
