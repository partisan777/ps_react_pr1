const setAuthUserStorage = (loginData, storage) => {
	const { login, type } = loginData;
		const newData = storage;
		console.log(newData);
		if (newData.users) {
			newData.users.forEach(el => el.isLogged = false);
			if ( type === 'signin') {
				const idx = newData.users.findIndex(el => el.login === login);
				if (idx === -1) {
					newData.users.push({ login: login, isLogged: true });
				} else {
					newData.users[idx].isLogged = true;
				};
			}
		} else {
			newData.users.push(loginData);
		};

    return newData;
};

export default setAuthUserStorage;
