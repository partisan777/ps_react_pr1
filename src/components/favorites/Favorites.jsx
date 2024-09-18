import './Favorites.css';
import Image from '../image/Image';

const Favorites = ({isFavorites}) => {

    let favoriteIcon;
    let favoritetext;
    let favoriteStyleClass;
    let altIcon;

    if (isFavorites) {
        favoriteIcon = '../../assets/in-favorites.svg';
        favoritetext = 'В избраном';
        favoriteStyleClass = 'favorites in-favorites__color';
        altIcon = 'in_favorites';
    } else {
        favoriteIcon = '../../assets/out-favorites.svg';
        favoritetext = 'В избранное';
        favoriteStyleClass = 'favorites out-favorites__color';
        altIcon = 'out_favorites';
    };

    return (
        <>
            <div className={favoriteStyleClass}>
                <Image styles={'favorites__icon'} image={favoriteIcon} alt={altIcon}/>
                {favoritetext}
            </div>
        </>
    );
};

export default Favorites;
