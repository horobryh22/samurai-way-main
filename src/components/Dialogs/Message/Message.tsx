import classes from './Message.module.css';
import React from 'react';

export type MessageType = {
    id: number
    message: string
}

export function Message({message, id}: MessageType) {
    return (
        <div key={id} className={classes.message}>{message}</div>
    )
}