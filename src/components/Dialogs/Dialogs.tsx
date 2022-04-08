import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {dialogType, messageType} from '../../App';

type DialogsType = {
    dialogsData: Array<dialogType>
    messagesData: Array<messageType>
}

export function Dialogs({dialogsData, messagesData}: DialogsType) {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog__items}>
                <div className={classes.dialog__title}>Chats</div>
                {dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={classes.messages}>
                <div className={classes.messages__title}>Stella Johnson</div>
                {messagesData.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}
