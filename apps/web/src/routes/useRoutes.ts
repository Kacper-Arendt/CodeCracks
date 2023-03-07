import { publicRoutes } from 'src/routes/public';

export const useRoutes = () => {
	const auth = { user: false };

	return auth?.user ? [] : publicRoutes;
};
