import headerStyles from './Header.module.css';
import Image from '../image/Image';
import Link from '../link/Link';
import { useContext } from 'react';
import { UserContext } from '#components/context/UserContext';

const Header = (props) => {
  const { login, setAuthUser } = useContext(UserContext);

  const onClickSignout = (e) => {
      e.preventDefault();
      setAuthUser({ login: login, isLogged: false, type: 'signout'  });
  };

  return (
    <>
      <div className={headerStyles['navbar']}>
        <div>
          <Image styles={headerStyles['navbar__bookmark__image']} image='#assets/bookmark.svg' alt={'bookmark'} />
        </div>
        <div className={headerStyles['navbar__links']}>
          <div className={headerStyles['navbar__links__link']}>
            <Link href={''} text={'Поиск фильмов'} onClick={(e) => {e.preventDefault(); console.log(e);}}/>
          </div>
          <div className={headerStyles['navbar__links__link']}>
            <Link href={''} text={'Мои фильмы'} onClick={(e) => {e.preventDefault(); console.log(e);}}/>
            <Image styles={''} image='#assets/circle.svg' alt={'circle'} />
          </div>
          <div className={headerStyles['navbar__links__link']} onClick={onClickSignout}>
            {login ?
              <>
                {login}
                <Link href={''} text={'Выйти'} onClick={(e) => onClickSignout(e)}/>
              </>
              :
              'Авторизуйтесь'
             }
            <Image styles={''} image='#assets/exit.svg' alt={'exit'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
