import Label from '#components/label/Label.jsx';
import Input from '#components/input/Input.jsx';
import Button from '#components/button/Button.jsx';
import SigninFormStyles from './SigninForm.module.css';
import cn from 'classnames';
import { useContext, useRef } from 'react';
import { UserContext } from '#components/context/UserContext.jsx';



const SigninForm = (props) => {
    const { styles } = props;
    const loginRef = useRef();
    const { setAuthUser } = useContext(UserContext);

    const onSubmitSignin = (e) => {
        e.preventDefault();
        if (!loginRef.current.value) {
            return;
        }
        setAuthUser({ login: loginRef.current.value, isLogged: true , type: 'signin'});
        loginRef.current.value = '';
    };

    return (
        <form className={cn(SigninFormStyles['signin-form'], styles)} onSubmit={onSubmitSignin} >
            <div>
                <Label text={'Вход'} styles={SigninFormStyles['signin-form__label']}/>
            </div>
            <div>
                <Input styles={SigninFormStyles['signin-form__input']} placeHolder={'Ваше имя'} ref={loginRef} />
            </div>
            <div>
                <Button text={'Войти в профиль'} styles={SigninFormStyles['signin-form__button']} />
            </div>
        </form>
    );
};

export default SigninForm;
