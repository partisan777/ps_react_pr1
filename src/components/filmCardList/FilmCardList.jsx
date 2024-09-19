import './FilmCardList.css';
import FilmCardItem from '../filmCardItem/FilmCardItem';
import { FILMS } from '../../_mockFilmData/_mockFilmData';



const FilmCardList = ({styles}) =>{

    return(
        <>
            <div className={styles + ' ' + 'film-card-list'}>
                {FILMS.map((item) => <FilmCardItem key={item.id} text={item.name} isFavorites={item.favorites} image={item.image} count={item.rating} />)}
            </div>
        </>
    );

};

export default FilmCardList;
