import mainLayoutStyles from './MainLayout.module.css';
import useLocalStorage from '#components/hooks/useLocalStorage.js';
import { useEffect, useContext } from 'react';
import setAuthUserStorage from '#components/utils/setAuthUserStorage.jsx';
import { UserContext } from '#components/context/user.context';
import Header from '#components/header/Header.jsx';
import MainPage from '#pages/mainPage/MainPage.jsx';

function MainLayout() {
  const [usersData, setUsersData] = useLocalStorage('pageData');
  const { login, setLogin } = useContext(UserContext);

  if (!usersData) {
    setUsersData({users: []});
  }

  const setAuthUser = (loginData) => {
    setUsersData(setAuthUserStorage(loginData, usersData));
    setLogin(usersData.users?.filter(el => el.isLogged === true)[0]?.login);
  };

  useEffect(() => {
    setLogin(usersData.users?.filter(el => el.isLogged === true)[0]?.login);
	}, []);

  return (
    <div className={mainLayoutStyles['main-layout']}>
      <Header login={login} setAuthUser={setAuthUser} />
      <MainPage login={login} setAuthUser={setAuthUser} />
     </div>
  );
};

export default MainLayout;
