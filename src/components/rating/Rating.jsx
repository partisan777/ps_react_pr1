import './Rating.css';
import Image from '#components/image/Image.jsx';


const Rating = ({styles, count}) => {

    return (
        <div className={styles + ' ' + 'rating-container'}>
            <Image  image={'#assets/rating.svg'} styles={'rating-container__image'} />
            <div className={'rating-container__font'}>
                {count}
            </div>
        </div>
    );

};

export default Rating;