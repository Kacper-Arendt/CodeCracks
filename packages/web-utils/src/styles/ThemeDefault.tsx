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
	mainColor: 'hsl(220, 26%, 14%)',
	asideColor: 'hsl(217,21%,27%)',

	primary: 'hsl(241, 100%, 68%)',
	white: 'hsl(0, 0%, 100%)',
	black: 'hsl(0, 0%, 0%)',

	error: 'hsl(0,100%,40%)',

	grey100: 'hsl(0, 0%, 96.5%)',
	grey200: 'hsl(0, 0%, 90.2%)',
	grey300: 'hsl(0, 0%, 80%)',
	grey400: 'hsl(0, 0%, 69.8%)',
	grey500: 'hsl(0, 0%, 60%)',
	grey600: 'hsl(0, 0%, 50%)',
	grey700: 'hsl(0, 0%, 40%)',
	grey800: 'hsl(0, 0%, 30%)',
	grey900: 'hsl(0, 0%, 20%)',
	grey1000: 'hsl(0, 0%, 10%)',
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
