import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
	const [data, setData] = useState({users: []});

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(key));
		if (res) {
			setData(res);
		};
	}, []);

	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(undefined);
		setData(newData);
	};

	return [ data, saveData ];
};


export default useLocalStorage;
