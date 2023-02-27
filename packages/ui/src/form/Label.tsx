import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	row-gap: 0.6rem;
	color: ${({ theme }) => theme.white};
	font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Label = ({ label, children }: { label?: string; children: ReactNode }) => (
	<StyledLabel>
		{label && <span>{label}</span>}
		{children}
	</StyledLabel>
);
