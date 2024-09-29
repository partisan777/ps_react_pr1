import Label from '#components/label/Label.jsx';
import Input from '#components/input/Input.jsx';
import Button from '#components/button/Button.jsx';
import SigninFormStyles from './SigninForm.module.css';
import cn from 'classnames';
import { useRef } from 'react';

const SigninForm = (props) => {
    const { styles ,loginData, setLoginData } = props;

    const onSubmitSignin = (e) => {
        e.preventDefault();
        setLoginData({ login: loginRef.current.value });
        loginRef.current.value = '';
    };
    const loginRef = useRef();

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
