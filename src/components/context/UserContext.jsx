import { createContext } from 'react';
import { useState } from 'react';
import useLocalStorage from '#components/hooks/useLocalStorage.js';
import setAuthUserStorage from '#components/utils/setAuthUserStorage.jsx';

export const UserContext = createContext({
	login: ''
});

export const UserContextProvider = ({ children }) => {
	const [login, setLogin] = useState('');
	const [usersData, setUsersData] = useLocalStorage('pageData');
	if (!usersData) {
		setUsersData({users: []});
	};

	const setAuthUser = (loginData) => {
		setUsersData(setAuthUserStorage(loginData, usersData));
		setLogin(usersData.users?.filter(el => el.isLogged === true)[0]?.login);
	};

	return (
		<UserContext.Provider value={{ login, setLogin, setAuthUser, usersData }}>
			{children}
		</UserContext.Provider>
	);
};


export default UserContext;
