import './Favorites.css';
import Image from '../image/Image';
import { useState } from 'react';

const Favorites = ({isFavorites}) => {

    const [favorite, setFavorite] = useState(isFavorites);

    return (
        <>
            <div className={favorite ? 'favorites out-favorites__color' : 'favorites in-favorites__color'}>
                <Image styles={'favorites__icon'} image={favorite ? '#assets/out-favorites.svg' : '#assets/in-favorites.svg' } alt={favorite ? 'out_favorites' : 'in_favorites'}/>
                {favorite ? 'В избранное' : 'В избраном'}
            </div>
        </>
  );
};

export default Favorites;
