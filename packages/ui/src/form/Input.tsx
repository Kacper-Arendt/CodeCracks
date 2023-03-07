import styled from 'styled-components';
import { forwardRef, useState } from 'react';

// COMPONENTS
import { Label } from './Label';

const StyledInputWrapper = styled.div`
	position: relative;
`;

const StyledInput = styled.input`
	width: 100%;
	border-radius: ${({ theme }) => theme.radius[2]};
	padding: 1rem 0.75rem;
	font-size: 0.9rem;
	outline: none;
	border: none;

	color: ${({ theme }) => theme.white};
	background-color: ${({ theme }) => theme.mainColor};

	::placeholder {
		color: ${({ theme }) => theme.grey400};
	}

	:-webkit-autofill {
		-webkit-text-fill-color: ${({ theme }) => theme.white};
		-webkit-box-shadow: 0 0 0 62.5rem ${({ theme }) => theme.mainColor} inset;
	}
`;

export const StyledButton = styled.button`
	position: absolute;
	inset: 0 0.5rem 0 auto;
	padding: 0.25rem;
`;

interface InputInterface {
	name: string;
	type: 'text' | 'password';
	label?: string;
	placeholder?: string;
	disabled?: boolean;
	autoFocus?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputInterface>(function Input(
	{ label, type, placeholder, autoFocus, disabled, ...props },
	ref,
) {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<Label label={label} name={props.name}>
			<StyledInputWrapper>
				<StyledInput
					ref={ref}
					type={isVisible ? 'text' : type}
					{...props}
					placeholder={placeholder}
					autoFocus={autoFocus}
					disabled={disabled}
				/>
				{type === 'password' && (
					// todo add icon
					<StyledButton type="button" onClick={() => setIsVisible(!isVisible)}>
						X
					</StyledButton>
				)}
			</StyledInputWrapper>
		</Label>
	);
});
