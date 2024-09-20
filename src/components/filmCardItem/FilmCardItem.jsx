import filmCardItemStyles from './FilmCardItem.module.css';
import Image from '../image/Image';
import Favorites from '../favorites/Favorites';
import Rating from '#components/rating/Rating.jsx';

const FilmCardItem = ({image, isFavorites, text, count}) =>{

  return(
    <>
      <div className={filmCardItemStyles['film-card-item']}>
        <Rating count={count} styles={filmCardItemStyles['film-card-item__rating']} />
        <Image image={image} styles={filmCardItemStyles['filmi-card-item__image']}/>
        <div className={filmCardItemStyles['film-card-item__data']}>
          <div className={filmCardItemStyles['film-card-Item__data_text']}>
            {text}
          </div>
          <Favorites isFavorites={isFavorites} />
        </div>

      </div>
    </>
  );
};

export default FilmCardItem;
