/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
	plugins: [react()],

	resolve: {
		alias: {
			src: path.resolve('src/'),
			tests: path.resolve('tests/'),
		},
	},

	server: {
		open: true,
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './src/tests/setup.ts',
	},
});
