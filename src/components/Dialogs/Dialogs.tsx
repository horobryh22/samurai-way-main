import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {MapDispatchPropsType, MapStatePropsType} from './DialogsContainer';
import TextFieldForm, {TextFormDataType} from '../common/components/TextFieldForm/TextFieldForm';

type DialogsType = MapStatePropsType & MapDispatchPropsType;

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
                <TextFieldForm onSubmit={onSubmitHandler}/>
            </div>
        </div>
    )
}
