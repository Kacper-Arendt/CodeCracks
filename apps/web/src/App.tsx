import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// UTILS
import { GlobalStyles, ThemeDefault } from 'web-utils';

// ROUTES
import { useRoutes } from 'src/routes';

const App = () => {
	return (
		<ThemeDefault>
			<GlobalStyles />
			<RouterProvider router={createBrowserRouter(useRoutes())} />
		</ThemeDefault>
	);
};

export default App;
