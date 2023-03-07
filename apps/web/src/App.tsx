// UTILS
import { GlobalStyles, ThemeDefault } from 'web-utils';

// COMPONENTS
import { CounterButton } from 'ui';

const App = () => {
	return (
		<ThemeDefault>
			<GlobalStyles />
			<div>
				<CounterButton />
			</div>
		</ThemeDefault>
	);
};

export default App;
