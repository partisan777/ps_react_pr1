import './MainPage.css';
import Button from '#components/button/Button';
import Label from '#components/label/Label';
import Paragraph from '#components/paragraph/Paragraph';
// import Input from 'react';
import Input from '#components/input/Input';
import Image from '#components/image/Image';
import FilmCardList from '#components/filmCardList/FilmCardList';

function MainPage () {
    const onClick = (e) => {
      e.preventDefault();
      console.log(e);
    };


  return (
    <>
      <div className='main-page__label__container'>
        <Label text='Поиск'  styles={''} />
        <Paragraph text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'  styles={''} />
      </div>
      <div className='main-page__search-container'>
        <div className='main-page__input__container'>
          <Image styles={'main-page__input__container_icon'} image='#assets/hug.svg' alt={'hug'} />
          <Input placeHolder={'Введите название'} styles={''}/>
        </div>
        <Button text='Искать' styles={''} onClick={onClick} />
      </div>
      <FilmCardList styles={'main-page__film-list-container'} />
    </>
  );
}

export default MainPage;
