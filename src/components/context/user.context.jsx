import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext({
	login: ''
});

export const UserContextProvider = ({ children }) => {
	const [login, setLogin] = useState('');
	console.log(login, 2);
	return (
		<UserContext.Provider value={{ login, setLogin }}>
			{children}
		</UserContext.Provider>
	);
};

const cons = (obj) => {
	console.log(obj);
};

export default cons;
