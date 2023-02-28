import { useFormContext } from 'react-hook-form';

export const FieldError = ({ name }: { name?: string }) => {
	const {
		formState: { errors },
	} = useFormContext();

	if (!name) return null;

	const error = errors[name];

	if (!error) return null;

	return <>{error.message}</>;
};
