import ratingStyles from './Rating.module.css';
import Image from '#components/image/Image.jsx';
import cn from 'classnames';

const Rating = ({styles, count}) => {

  return (
    <div className={cn(styles, ratingStyles['rating-container'])}>
      <Image image={'#assets/rating.svg'} styles={ratingStyles['rating-container__image']} />
      <div className={ratingStyles['rating-container__font']}>
        {count}
      </div>
    </div>
  );

};

export default Rating;