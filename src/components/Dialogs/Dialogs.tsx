import React, {LegacyRef} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem, DialogItemType} from './DialogItem/DialogItem';
import {Message, MessageType} from './Message/Message';

type DialogsType = {
    state: {
        dialogs: Array<DialogItemType>
        messages: Array<MessageType>
    }
}

export function Dialogs({state}: DialogsType) {

    const dialogs = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    const messages = state.messages.map(m => <Message message={m.message} id={m.id}/>);
    const newMessageElement: LegacyRef<HTMLTextAreaElement> = React.createRef();

    const sendMessage: () => void = () => {
        // @ts-ignore
        const textMessage = newMessageElement.current.value;
        console.log(textMessage);
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
                <textarea ref={newMessageElement}/>
                <div>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}
