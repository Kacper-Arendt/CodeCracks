import { ReactNode } from 'react';
import styled from 'styled-components';
import { FieldError } from 'web-components';

const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	row-gap: 0.6rem;
	color: ${({ theme }) => theme.white};
	font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const StyledError = styled.p`
	font-size: 0.8rem;
	color: ${({ theme }) => theme.error};
	white-space: pre-wrap;
`;

export const Label = ({ label, children, name }: { label?: string; children: ReactNode; name?: string }) => (
	<StyledLabel>
		{label && <span>{label}</span>}
		{children}
		{name && (
			<StyledError>
				<FieldError name={name} />
			</StyledError>
		)}
	</StyledLabel>
);
