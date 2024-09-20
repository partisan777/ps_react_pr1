import favoriteStyles from './Favorites.module.css';
import cn from 'classnames';
import Image from '../image/Image';
import { useState } from 'react';

const Favorites = ({isFavorites}) => {

  const [favorite, setFavorite] = useState(isFavorites);

  return (
    <>
      <div className={favorite ? cn(favoriteStyles['favorites'], favoriteStyles['out-favorites__color']) : cn(favoriteStyles['favorites'], favoriteStyles['in-favorites__color'])}>
        <Image
          styles={favoriteStyles['favorites__icon'] } image={favorite ? '#assets/out-favorites.svg' : '#assets/in-favorites.svg' }
          alt={favorite ? 'out_favorites' : 'in_favorites'
        }/>
        {favorite ? 'В избранное' : 'В избраном'}
      </div>
    </>
  );
};

export default Favorites;
