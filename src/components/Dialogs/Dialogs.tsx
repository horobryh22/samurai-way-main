import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {MapDispatchPropsType, MapStatePropsType} from './DialogsContainer';
import TextFieldForm, {TextFormDataType} from '../common/components/TextFieldForm/TextFieldForm';
import {maxLengthCreator} from '../../utilities/validation/validation';
import {ElementCreator} from '../../hoc/ElementCreator/ElementCreator';

type DialogsType = MapStatePropsType & MapDispatchPropsType;

const maxLength = maxLengthCreator(10);
const Textarea = ElementCreator('textarea');

export const Dialogs: React.FC<DialogsType> = ({dialogsPage, sendMessage}) => {

    const dialogs = dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>);
    const messages = dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>);


    const onSubmitHandler = ({textField: message}:TextFormDataType) => {
        sendMessage(message);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialogTitle}>Chats</div>
                {dialogs}
            </div>
            <div className={classes.messages}>
                <div className={classes.messagesTitle}>Stella Johnson</div>
                <div className={classes.messagesWrapper}>
                    {messages}
                </div>
                <TextFieldForm
                    name={'Add message'}
                    onSubmit={onSubmitHandler}
                    maxLength={maxLength}
                    component={Textarea}
                />
            </div>
        </div>
    )
}
