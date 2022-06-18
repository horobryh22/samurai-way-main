import React from 'react';
import classes from './Login.module.css'
import LoginForm, {FormDataType} from './LoginForm';

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1 className={classes.title}>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

