import React, {ChangeEvent, LegacyRef} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {ActionType, DialogsPageType} from '../../redux/state';

type DialogsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
}

export const Dialogs: React.FC<DialogsType> = ({dialogsPage, dispatch}) => {

    const dialogs = dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>);
    const messages = dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>);
    const textareaValue = dialogsPage.textareaValue;

    const onClickButtonHandler = (): void => {
        dispatch({type: 'SEND-MESSAGE', textMessage: textareaValue})
    }

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        const valueMessage = e.currentTarget.value;
        dispatch({type: 'CHANGE-VALUE-TEXTAREA-MESSAGE', valueMessage})
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
