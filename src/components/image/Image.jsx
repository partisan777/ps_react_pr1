
const Image = ({image, alt, styles}) => {

    return (
        <img src={image} className={styles} alt={alt} />
    );
};

export default Image;
