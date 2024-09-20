import buttonStyles from './Button.module.css';
import cn from 'classnames';

function Button({text, styles, onClick}) {

  return (
    <button onClick={onClick} className={cn(styles, buttonStyles['button'])}>{text}</button>
  );
};

export default Button;
