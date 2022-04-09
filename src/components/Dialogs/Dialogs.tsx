import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {dialogType, messageType} from '../../App';

type DialogsType = {
    state: {
        dialogsData: Array<dialogType>
        messagesData: Array<messageType>
    }
}

export function Dialogs({state}: DialogsType) {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialogTitle}>Chats</div>
                {state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)}
            </div>
            <div className={classes.messages}>
                <div className={classes.messagesTitle}>Stella Johnson</div>
                <div className={classes.messagesWrapper}>
                    {state.messagesData.map(m => <Message message={m.message}/>)}
                </div>
            </div>
        </div>
    )
}
