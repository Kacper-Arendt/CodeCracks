import { z } from 'zod';
import styled from 'styled-components';

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
		width: 100%;
	}
`;

export const RegisterForm = () => {
	const form = useForm({
		schema: signUpFormSchema,
	});

	return (
		<StyledForm>
			<Form form={form} onSubmit={(values) => console.log(values)}>
				<Input {...form.register('email')} type="text" label="Label" placeholder="placeholder" />
				<Input {...form.register('password')} type="password" label="Label" placeholder="placeholder" />
				<Button type="submit" width="100%">
					Click
				</Button>
			</Form>
		</StyledForm>
	);
};
