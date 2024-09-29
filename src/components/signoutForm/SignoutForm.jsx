import Button from '#components/button/Button.jsx';
import SignoutFormStyles from './SignoutForm.module.css';
import cn from 'classnames';

const SignoutForm = (props) => {
    const { styles, login, onSubmit } = props;

    if (!login) {
        return (<p className={cn(SignoutFormStyles['signout-form'], styles)}>{'Вы не авторизованы'}</p>);
    };

    return (
        <form className={cn(SignoutFormStyles['signout-form'], styles)} onSubmit={onSubmit} >
            <div>
                <p>{login}</p>
                <Button text={'Выход'} styles={SignoutFormStyles['signout-form__button']} />
            </div>
        </form>
    );
};

export default SignoutForm;
