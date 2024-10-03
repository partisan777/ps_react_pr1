import './App.css';
import MainLayout from './components/mainLayout/MainLayout';
import Header from './components/header/Header';
import MainPage from './pages/mainPage/MainPage';
import useLocalStorage from '#components/hooks/useLocalStorage.js';
import { useEffect, useState } from 'react';
import setAuthUserStorage from '#components/utils/setAuthUserStorage.jsx';


function App() {
  const [usersData, setUsersData] = useLocalStorage('pageData');
  const [login, setLogin] = useState('');

  if (!usersData) {
    setUsersData({users: []});
  }

  const setAuthUser = (loginData) => {
    console.log(loginData, usersData, 1);
    setUsersData(setAuthUserStorage(loginData, usersData));
    setLogin(usersData.users?.filter(el => el.isLogged === true)[0]?.login);
  };

  useEffect(() => {
    setLogin(usersData.users?.filter(el => el.isLogged === true)[0]?.login);
	}, []);

  return (
    <>
      <MainLayout>
        <Header login={login} setAuthUser={setAuthUser} />
        <MainPage login={login} setAuthUser={setAuthUser} />
      </MainLayout>
    </>
  );
};

export default App;
