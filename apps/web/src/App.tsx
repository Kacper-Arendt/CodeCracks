import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// UTILS
import { GlobalStyles, ThemeDefault } from 'web-utils';

// ROUTES
import { useRoutes } from 'src/routes';
import { FetchContextProvider } from 'web-utils';

// CONFIG
import { API_URL } from 'src/config';

const App = () => {
	return (
		<ThemeDefault>
			<GlobalStyles />
			<FetchContextProvider baseUrl={API_URL} token={null}>
				<RouterProvider router={createBrowserRouter(useRoutes())} />
			</FetchContextProvider>
		</ThemeDefault>
	);
};

export default App;
