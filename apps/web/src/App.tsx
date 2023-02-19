import { useEffect } from 'react';

// COMPONENTS
import { CounterButton, NewTabLink } from 'ui';

const App = () => {
	const url = import.meta.env.VITE_SERVER_URL;

	useEffect(() => {
		const handleFetch = () => {
			fetch(url).then(async (resp) => {
				const data = await resp.json();
				console.log(data);
			});
		};

		handleFetch();
	}, []);

	return (
		<div className="container">
			<CounterButton />
			<p className="description">
				Built With <NewTabLink href="https://turbo.build/repo">Turborepo</NewTabLink> +{' '}
				<NewTabLink href="https://vitejs.dev/">Vite</NewTabLink>
			</p>
		</div>
	);
};

export default App;
