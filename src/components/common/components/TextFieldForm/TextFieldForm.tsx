import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React from 'react';
import {requiredValue} from '../../../../utilities/validation/validation';

export type TextFormDataType = {
    textField: string
}

type FiledFormPropsType = {
    name: string
    maxLength: (value: string) => void
    component: React.FunctionComponent
}

const TextFieldForm: React.FC<FiledFormPropsType & InjectedFormProps<TextFormDataType, FiledFormPropsType>> = ({handleSubmit, name, maxLength, component}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                component={component}
                name={'textField'}
                placeholder={'Enter your message'}
                validate={[requiredValue, maxLength]}
            />
            <div>
                <button>{name}</button>
            </div>
        </form>
    )
}

export default reduxForm<TextFormDataType, FiledFormPropsType>({form: 'textField'})(TextFieldForm);