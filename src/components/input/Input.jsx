import inputStyles from  './Input.module.css';
import cn from 'classnames';

const Input = ({placeHolder, styles, onClick}) => {

    return (
       <>
        <input className={cn(styles, inputStyles['input'])} onClick={onClick} placeholder={placeHolder} />
       </>
    );
};

export default Input;
