import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

const buttonSize = {
	sm: '0.8rem',
	md: '0.8rem 1.5rem',
	lg: '1rem 2rem',
};

const StyledButton = styled.button<Pick<ButtonInterface, 'variant' | 'size' | 'disabled' | 'width'>>`
	text-decoration: none;
	cursor: pointer;
	text-align: center;
	background-color: transparent;
	border: 1px solid transparent;
	font-size: 1rem;
	border-radius: ${({ theme }) => theme.radius[2]};
	color: ${({ theme }) => theme.white};
	letter-spacing: 1.05px;
	font-weight: ${({ theme }) => theme.fontWeight.medium};

	${({ variant }) => {
		switch (variant) {
			case 'outlined':
				return css`
					border: ${({ theme }) => theme.primary};
					color: ${({ theme }) => theme.white};
				`;
			case 'contained':
			default:
				return css`
					background-color: ${({ theme }) => theme.primary};
				`;
		}
	}}

	${({ variant }) => {
		switch (variant) {
			case 'outlined':
				return css`
					border: ${({ theme }) => theme.primary};
					color: ${({ theme }) => theme.white};
				`;
			case 'contained':
			default:
				return css`
					background-color: ${({ theme }) => theme.primary};
				`;
		}
	}};

	${({ size }) =>
		size &&
		buttonSize[size] &&
		css`
			padding: ${buttonSize[size]};
		`};

	${({ width }) =>
		width &&
		css`
			width: ${width};
		`};

	${({ disabled }) =>
		disabled &&
		css`
			background-color: ${({ theme }) => theme.grey600};
			cursor: not-allowed;
		`};
`;

interface ButtonInterface {
	type: 'button' | 'submit' | 'reset';
	children: ReactNode;
	variant?: 'contained' | 'outlined';
	size?: 'sm' | 'md' | 'lg';
	onClick?: () => void;
	disabled?: boolean;
	title?: string;
	width?: string;
}

export const Button = ({
	type,
	children,
	variant = 'contained',
	size = 'md',
	disabled,
	title,
	width,
	onClick,
}: ButtonInterface) => (
	<div>
		<StyledButton
			type={type}
			disabled={disabled}
			title={title}
			aria-label={title}
			width={width}
			onClick={onClick}
			variant={variant}
			size={size}
		>
			{children}
		</StyledButton>
	</div>
);
