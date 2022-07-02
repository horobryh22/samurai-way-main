import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React from 'react';

export type TextFormDataType = {
    textField: string
}

const TextFieldForm: React.FC<InjectedFormProps<TextFormDataType>> = ({handleSubmit, }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field component={'textarea'} name={'textField'} placeholder={'Enter your message'}/>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}


export default reduxForm<TextFormDataType>({form: 'textField'})(TextFieldForm);