import classes from './Login.module.css';
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {ElementCreator} from '../../hoc/ElementCreator/ElementCreator';
import {maxLengthCreator, requiredValue} from '../../utilities/validation/validation';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength = maxLengthCreator(55);
const Input = ElementCreator('input');

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Field
                placeholder={'login'}
                component={Input}
                name={'login'}
                validate={[maxLength, requiredValue]}
            />
            <Field
                placeholder={'password'}
                component={Input}
                name={'password'}
                validate={[maxLength, requiredValue]}
            />
            <Field
                type={'checkbox'}
                component={Input}
                name={'rememberMe'}
            />Remember Me
            <button>Login</button>
        </form>
    );
};

export default reduxForm<FormDataType>({form: 'login'})(LoginForm);
