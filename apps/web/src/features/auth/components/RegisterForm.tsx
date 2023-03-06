import { z } from 'zod';
import styled from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useRegister } from 'src/features/auth/hooks';

// COMPONENTS
import { Form, useForm } from 'web-components';
import { Input, Button } from 'ui';

const signUpFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6).max(126),
});

export const StyledForm = styled.div`
	width: 100%;

	form {
		display: flex;
		flex-direction: column;
		row-gap: 0.75rem;
	}
`;

export const RegisterForm = () => {
	const { registerWithCredentials, loading } = useRegister();
	const form = useForm({
		schema: signUpFormSchema,
	});

	return (
		<ErrorBoundary FallbackComponent={() => null}>
			<StyledForm>
				<Form form={form} onSubmit={(values) => registerWithCredentials(values)} aria-label="register">
					<Input {...form.register('email')} type="text" label="Email" placeholder="Enter your email address" />
					<Input {...form.register('password')} type="password" label="Password" placeholder="Enter your password" />
					<Button type="submit" width="100%" disabled={loading}>
						{loading ? 'Loading...' : 'Submit'}
					</Button>
				</Form>
			</StyledForm>
		</ErrorBoundary>
	);
};
