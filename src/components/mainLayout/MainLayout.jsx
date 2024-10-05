import mainLayoutStyles from './MainLayout.module.css';
import { useEffect, useContext } from 'react';
import { UserContext } from '#components/context/UserContext';
import Header from '#components/header/Header.jsx';
import MainPage from '#pages/mainPage/MainPage.jsx';

function MainLayout() {

  const { setLogin, usersData } = useContext(UserContext);

  useEffect(() => {
    setLogin(usersData.users?.filter(el => el.isLogged === true)[0]?.login);
	}, []);

  return (
    <div className={mainLayoutStyles['main-layout']}>
      <Header />
      <MainPage />
     </div>
  );
};

export default MainLayout;
