// HOOKS
import { useFetch } from 'web-utils';

export const useRegister = () => {
	const { fetchFn, loading } = useFetch();

	const registerWithCredentials = (body: { email: string; password: string }) => {
		const onError = (e: any) => {
			console.log(e.status);
			alert(e.message);
		};
		const onFinish = () => alert('account created successfully');

		fetchFn({ url: 'auth/register', options: { method: 'POST', body }, onFinish, onError });
	};

	return { loading, registerWithCredentials };
};
