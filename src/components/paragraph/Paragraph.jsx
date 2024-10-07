import paragraphStyles from './Paragraph.module.css';
import cn from 'classnames';

function Paragraph({text, styles}) {

    return (
        <p className={cn(styles, paragraphStyles['paragraph'])}>{text}</p>
    );
};

export default Paragraph;
