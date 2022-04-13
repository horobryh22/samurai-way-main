import React, {ChangeEvent, LegacyRef} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/state';

type DialogsType = {
    dialogsPage: DialogsPageType
    sendMessage: (textMessage: string) => void
    changeValueTextareaMessage: (value: string) => void
}

export const Dialogs: React.FC<DialogsType> = ({dialogsPage, sendMessage, changeValueTextareaMessage}) => {

    const dialogs = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    const messages = dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>);
    const textareaValue = dialogsPage.textareaValue;


    const onClickButtonHandler = (): void => {
        sendMessage(textareaValue);
    }

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        const value = e.currentTarget.value;
        changeValueTextareaMessage(value);
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
                <textarea onChange={onChangeTextareaHandler} value={textareaValue}/>
                <div>
                    <button onClick={onClickButtonHandler}>Send Message</button>
                </div>
            </div>
        </div>
    )
}
