import classes from '../Dialogs.module.css';
import React from 'react';

type MessageType = {
    message: string
}

export function Message({message}: MessageType) {
    return (
        <div className={classes.message}>{message}</div>
    )
}