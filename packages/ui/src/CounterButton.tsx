import { useState } from 'react';
import styled from 'styled-components';

const StyledCounterButton = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	align-items: center;
	justify-content: center;

	padding: 2rem;
	color: ${({ theme }) => theme.primary};

	button {
		padding: 1rem;
		color: ${({ theme }) => theme.primary};
		background-color: transparent;
		border: 2px solid ${({ theme }) => theme.primary};
		border-radius: ${({ theme }) => theme.radius[2]};
	}
`;

export const CounterButton = () => {
	const [count, setCount] = useState(0);
	return (
		<StyledCounterButton>
			<button type="button" onClick={() => setCount((c) => c + 1)}>
				Click
			</button>
			<p>Count: {count}</p>
		</StyledCounterButton>
	);
};
