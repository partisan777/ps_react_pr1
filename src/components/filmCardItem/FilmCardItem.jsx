import './FilmCardItem.css';
import Image from '../image/Image';
import Favorites from '../favorites/Favorites';
import Rating from '#components/rating/Rating.jsx';


const FilmCardItem = ({image, isFavorites, text, count}) =>{

    return(
        <>
            <div className='film-card-item'>
                <Rating count={count} styles={'film-card-item__rating'} />
                <Image  image={image} styles={'filmi-card-item__image'}/>
                <div className={'film-card-item__data'}>
                    <div className={'film-card-Item__data_text'}>
                        {text}
                    </div>
                    <Favorites isFavorites={isFavorites} />
                </div>

            </div>
        </>
    );
};

export default FilmCardItem;
