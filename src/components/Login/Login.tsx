import React from 'react';
import classes from './Login.module.css'
import LoginForm, {FormDataType} from './LoginForm';
import {connect} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/redux-store';
import {logInTC} from '../../redux/reducers/auth-reducer/auth-reducer';
import {Redirect} from 'react-router-dom';

type LoginPropsType = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

const Login: React.FC<LoginPropsType> = ({loginMe, isAuth}) => {

    const onSubmit = ({login, password, rememberMe}: FormDataType) => {
        loginMe(login, password, rememberMe);
    }

    if (isAuth) return  <Redirect to={'/profile'}/>;

    return (
        <div>
            <h1 className={classes.title}>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth
    } as const
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        loginMe: (email: string, password: string, rememberMe: boolean) => {
            dispatch(logInTC(email, password, rememberMe));
        }
    } as const
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

