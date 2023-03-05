import { render, RenderOptions, RenderResult } from '@testing-library/react';

import { FetchContextProvider, GlobalStyles, ThemeDefault } from 'web-utils';
import { API_URL } from 'src/config';

interface IExtendedRenderOptions extends RenderOptions {
	withThemeProvider?: boolean;
	withFetchProvider?: boolean;
}

const wrapInFetchProvider = (componentTree: JSX.Element) => (
	<FetchContextProvider baseUrl={API_URL} token={null}>
		{componentTree}
	</FetchContextProvider>
);

const wrapInThemeProvider = (componentTree: JSX.Element) => (
	<ThemeDefault>
		<GlobalStyles />
		{componentTree}
	</ThemeDefault>
);

const setupComponent = (ui: JSX.Element, renderOptions?: IExtendedRenderOptions) => {
	if (!renderOptions) return ui;
	let componentTree = <>{ui}</>;
	if (renderOptions?.withFetchProvider) componentTree = wrapInFetchProvider(componentTree);
	if (renderOptions?.withThemeProvider) componentTree = wrapInThemeProvider(componentTree);
	return componentTree;
};

const customRender = (
	ui: JSX.Element,
	renderOptions: IExtendedRenderOptions = { withThemeProvider: true, withFetchProvider: true },
): RenderResult => {
	try {
		const componentTree = setupComponent(ui, renderOptions);
		return render(componentTree);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export * from '@testing-library/react';
export type { IExtendedRenderOptions };
export { customRender };
