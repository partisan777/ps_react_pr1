import './Header.css';
import Image from '../image/Image';
import Link from '../link/Link';

const Header = () => {

    return (
        <>
            <div className='navbar'>
                <div>
                    <Image styles={'navbar__bookmark__image'} image='../../assets/bookmark.svg' alt={'bookmark'} />
                </div>
                <div className='navbar__links'>
                    <div className='navbar__links__link'>
                        <Link href={''} text={'Поиск фильмов'} onClick={(e) => {e.preventDefault(); console.log(e);}}/>
                    </div>
                    <div className='navbar__links__link'>
                        <Link href={''} text={'Мои фильмы'} onClick={(e) => {e.preventDefault(); console.log(e);}}/>
                        <Image styles={''} image='../../assets/circle.svg' alt={'circle'} />
                    </div>
                    <div className='navbar__links__link'>
                        <Link href={''} text={'Выйти'} onClick={(e) => {e.preventDefault(); console.log(e);}}/>
                        <Image styles={''} image='../../assets/exit.svg' alt={'exit'} />
                    </div>
                </div>
            </div>
        </>
    );

};

export default Header;
