import './Label.css';

function Label({text, styles}) {

    return (
        <h1 className={styles + ' ' + 'label'}>{text}</h1>
    );
};

export default Label;
