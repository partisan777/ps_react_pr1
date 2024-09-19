import './Link.css';

const Link = ({href, text, styles, onClick}) => {

    return (
        <a className={styles + ' ' + 'link'} href={href} onClick={onClick}>{text}</a>
    );
};

export default Link;