import { createContext, ReactNode } from 'react';

interface ConfigInterface {
	token: string | null;
	baseUrl: string;
}

interface ContextProviderInterface extends ConfigInterface {
	children?: ReactNode | ReactNode[] | null;
}

const fetchContext = ({ baseUrl, token }: ConfigInterface) => ({ baseUrl, token });

export const fetchContextData = createContext({} as ReturnType<typeof fetchContext>);

export const FetchContextProvider = ({ children, ...rest }: ContextProviderInterface) => (
	<fetchContextData.Provider value={fetchContext({ ...rest })}>{children}</fetchContextData.Provider>
);
