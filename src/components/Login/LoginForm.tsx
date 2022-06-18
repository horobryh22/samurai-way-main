import classes from './Login.module.css';
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Field placeholder={'login'} component={'input'} name={'login'}/>
            <Field placeholder={'password'} component={'input'} name={'password'}/>
            <div>
                <Field type={'checkbox'} component={'input'} name={'rememberMe'}/>Remember Me
            </div>
            <button>Login</button>
        </form>
    );
};

export default reduxForm<FormDataType>({form: 'login'})(LoginForm);
