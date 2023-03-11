import { useContext, useState } from 'react';
import { fetchContextData } from './fetchContext';

interface OptionsInterface {
	method: 'POST' | 'PUT' | 'DELETE' | 'GET';
	body?: any;
}

export const useFetch = <T = unknown>() => {
	const { baseUrl, token } = useContext(fetchContextData);
	const [loading, setLoading] = useState(false);
	const controller = new AbortController();
	const signal = controller.signal;

	const fetchFn = async ({
		url,
		options,
		onFinish,
		onError,
	}: {
		url: string;
		options: OptionsInterface;
		onFinish?: (resp: T) => void;
		onError?: (err: any) => void;
	}) => {
		try {
			setLoading(true);
			const res = await fetch(`${baseUrl}/${url}`, {
				method: options.method,
				...(options?.body ? { body: JSON.stringify(options?.body) } : {}),
				headers: {
					...(token ? { token: `bearer ${token}` } : {}),
					'Content-Type': 'application/json',
				},
				mode: 'cors',
				signal,
			});
			if (!res.ok) {
				const { error } = await res.json();
				throw new Error(error);
			}

			const json = await res.json();
			if (onFinish) onFinish(json);
		} catch (error: any) {
			if (onError) onError(error);
		} finally {
			setLoading(false);
		}
	};

	return { signal, loading, fetchFn };
};
