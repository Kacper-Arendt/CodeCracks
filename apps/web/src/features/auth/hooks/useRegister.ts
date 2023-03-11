import axios from 'axios';

// HOOKS
import { useFetch } from 'web-utils';
import { useEffect } from 'react';

export const useRegister = () => {
	const { fetchFn, loading } = useFetch();

	const registerWithCredentials = (body: { email: string; password: string }) => {
		const onError = (e: any) => {
			console.log(e.status);
			alert(e.message);
		};
		const onFinish = () => alert('account created successfully');

		axios
			.post('https://plankton-app-92stg.ondigitalocean.app/register', body)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => console.log(err));
		// fetchFn({ url: 'auth/register', options: { method: 'POST', body }, onFinish, onError });
	};

	useEffect(() => {
		axios
			.post('https://plankton-app-92stg.ondigitalocean.app/register', { email: 'plankton@', password: '12' })
			.then((response) => {
				console.log(response);
			})
			.catch((err) => console.log(err));
		// fetchFn({ url: 'auth/register', options: { method: 'POST', body }, onFinish, onError });
	}, []);

	return { loading, registerWithCredentials };
};
