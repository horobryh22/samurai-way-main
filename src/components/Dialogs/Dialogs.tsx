import React, {LegacyRef} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/state';

type DialogsType = {
    dialogsPage: DialogsPageType
}

export const Dialogs: React.FC<DialogsType> = ({dialogsPage}) => {

    const dialogs = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    const messages = dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>);
    const newMessageElement: LegacyRef<HTMLTextAreaElement> = React.createRef();

    const sendMessage: () => void = () => {
        if (newMessageElement.current) {
            const textMessage = newMessageElement.current.value;
            console.log(textMessage);
        }
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
