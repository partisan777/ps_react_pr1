import './Button.css';

function Button({text, styles, onClick}) {

    return (
        <button onClick={onClick} className={styles + ' ' +  'button'}>{text}</button>
    );
};

export default Button;
