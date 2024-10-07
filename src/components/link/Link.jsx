import linkStyles from './Link.module.css';
import cn from 'classnames';

const Link = ({href, text, styles, onClick}) => {

  return (
    <a className={cn(styles, linkStyles['link'])} href={href} onClick={onClick}>{text}</a>
  );
};

export default Link;