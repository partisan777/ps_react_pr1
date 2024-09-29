import { useEffect } from 'react';
import useLocalStorage from '#components/hooks/useLocalStorage.js';
import SigninForm from '#components/signinForm/SigninForm.jsx';
import SignoutForm from '#components/signoutForm/SignoutForm.jsx';


function AuthForm (props) {
    const [loginData, setLoginData] = useLocalStorage('pageData');
    const { styles } = props;
    const login = loginData?.login;

    const onSubmitSignout = (e) => {
        e.preventDefault();
        setLoginData({ login: undefined  });
    };

    return (
        <div className={styles}>
            {login ?
                <SignoutForm  styles={''} login={login} onSubmit={onSubmitSignout} />
                :
                <SigninForm styles={''} loginData={loginData} setLoginData={setLoginData} />
            }
        </div>
    );
};

export default AuthForm;
