import './Input.css';

const Input = ({placeHolder, styles, onClick}) => {

    return (
       <>
        <input className={styles + ' ' + 'input'} onClick={onClick} placeholder={placeHolder} />
       </>
    );
};

export default Input;
