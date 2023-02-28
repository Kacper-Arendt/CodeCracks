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
	padding: 2rem 2.5rem;

	background-color: ${({ theme }) => theme.asideColor};

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		max-width: 28rem; // 448px
	}
`;

const StyledGraphic = styled.div`
	display: none;

	@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const AuthLayout = ({ children, image }: { children: ReactNode; image: string | null }) => {
	return (
		<StyledLayout>
			<StyledMain>{children}</StyledMain>
			{image && (
				<StyledGraphic>
					<img src={image} alt="" />
				</StyledGraphic>
			)}
		</StyledLayout>
	);
};
