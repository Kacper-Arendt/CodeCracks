// UTILS
import { lazyImport } from 'web-utils';

const { Register } = lazyImport(() => import('src/features/auth'), 'Register');

export const publicRoutes = [
	{
		path: '/',
		children: [
			{
				index: true,
				// path: routes.register.short,
				element: <Register />,
			},
		],
	},
];
