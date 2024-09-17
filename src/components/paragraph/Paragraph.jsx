import './Paragraph.css';

function Paragraph({text, styles}) {

    return (
        <p className={styles + ' ' + 'paragraph'}>{text}</p>
    );
};

export default Paragraph;
