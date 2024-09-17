import './MainPage.css';
import Button from '../../components/button/Button';
import Label from '../../components/label/Label';
import Paragraph from '../../components/paragraph/Paragraph';
// import Input from 'react';
import Input from '../../components/input/Input';
import Image from '../../components/image/Image';


function MainPage () {
    const onClick = (e) => {
      e.preventDefault();
      console.log(e);
    };


  return (
    <>
      <div className='main_page_label_container'>
        <Label text='Поиск'  styles={''} />
        <Paragraph text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'  styles={''} />
      </div>
      <div className='main_page_search_container'>
        <div className='main_page_input_container'>
          <Image styles={'main_page_input_container_icon'} logo='../../assets/hug.svg' alt={'hug'} />
          <Input placeHolder={'Введите название'} styles={''}/>
        </div>
        <Button text='Искать' styles={''} onClick={onClick} />
      </div>
    </>
  );
}

export default MainPage;
