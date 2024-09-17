
const Image = ({logo, alt, styles}) => {

    return (
        <img src={logo} className={styles} alt={alt} />
    );
};

export default Image;
