import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

export const zIndexesArray = [
	'zIndex_floor',
	'zIndex_tooltip',
	'zIndex_nav',
	'zIndex_dropdown',
	'zIndex_contentLoader',
	'zIndex_sidebarNav',
	'zIndex_overlay',
	'zIndex_modal',
	'zIndex_alert',
] as const;

type ZIndexesType = {
	[key in (typeof zIndexesArray)[number]]: number;
};

const makeZIndexes = (layers: typeof zIndexesArray) =>
	layers.reduce((accu, layerName, index) => {
		accu[layerName] = index + 1;

		return accu;
	}, {} as ZIndexesType);

export const zIndexes = makeZIndexes(zIndexesArray);

export const colors = {
	primary: 'hsl(241, 100%, 68%)',
	white: 'hsl(0, 0%, 100%)',
	black: 'hsl(0, 0%, 0%)',

	dark: {
		aside: 'hsl(217,21%,27%)',
		main: 'hsl(220, 26%, 14%)',
	},
};

const theme = {
	...colors,
	...zIndexes,

	font: 'Inter, sans-serif',

	fontWeight: {
		regular: 400,
		medium: 500,
		semiBold: 600,
		bold: 700,
	},

	radius: {
		1: '0.25rem',
		2: '0.5rem',
		3: '0.75rem',
		4: '1rem',
		5: '1.25rem',
	},

	breakpoints: {
		sm: '576px',
		md: '768px',
		lg: '992px',
		xl: '1200px',
		xxl: '1400px',
	},
};

export type ColorsKeys = keyof typeof colors;

export type ThemeType = typeof theme;

export default theme;

export const ThemeDefault = ({ children }: { children: ReactNode }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
