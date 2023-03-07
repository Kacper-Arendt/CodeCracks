import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${css`
		*,
		*::after,
		*::before {
			box-sizing: border-box;
			padding: 0;
			margin: 0;
		}

		body,
		html {
			font-family: ${({ theme }) => theme.font};
			font-weight: ${({ theme }) => theme.fontWeight.regular};
		}

		#root {
			min-height: 100vh;
		}

		a {
			text-decoration: none;
			color: ${({ theme }) => theme.black};
		}

		button {
			cursor: pointer;
			font-family: ${({ theme }) => theme.font};
			border: unset;
			background: none;

			:disabled {
				cursor: not-allowed;
			}
		}
	`}
`;
