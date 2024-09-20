import labelStyles from './Label.module.css';
import cn from 'classnames';

function Label({text, styles}) {

  return (
    <h1 className={cn(styles, labelStyles['label'])}>{text}</h1>
  );
};

export default Label;
