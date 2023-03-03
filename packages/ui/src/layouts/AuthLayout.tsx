import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
	display: flex;
	min-height: 100vh;
	background: ${({ theme }) => theme.mainColor};
`;

const StyledMain = styled.main`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 2rem 2.5rem;

	background-color: ${({ theme }) => theme.asideColor};

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: 28rem; // 448px
	}
`;

export const StyledTitle = styled.h1`
	color: ${({ theme }) => theme.white};
	font-size: 1.5rem;
	padding-bottom: 3rem;
`;

const StyledGraphic = styled.div`
	display: none;

	@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const AuthLayout = ({
	children,
	image,
	title,
}: {
	children: ReactNode;
	image?: string | null;
	title?: string;
}) => (
	<StyledLayout>
		<StyledMain>
			{title && <StyledTitle>{title}</StyledTitle>}
			{children}
		</StyledMain>
		{image && (
			<StyledGraphic>
				<img src={image} alt="" />
			</StyledGraphic>
		)}
	</StyledLayout>
);
