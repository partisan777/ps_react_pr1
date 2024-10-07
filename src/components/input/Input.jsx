import { forwardRef } from 'react';
import inputStyles from  './Input.module.css';
import cn from 'classnames';

const Input = forwardRef(function Input (props, ref) {
    const {styles, placeHolder, ...otherProps } = props;
    return (
        <input className={cn(styles, inputStyles['input'])} placeholder={placeHolder} ref={ref} {...otherProps} />
    );
});

export default Input;
