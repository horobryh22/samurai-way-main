import classes from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

type DialogItemType = {
    id: number
    name: string
    avatar: string
}

export function DialogItem({name, id, avatar}: DialogItemType) {
    return (
        <div className={classes.dialog}>
            <div className={classes.avatar}>
                <img src={`${avatar}`} alt=""/>
            </div>
            <div className={classes.content}>
                <div className={classes.topContent}>
                    <div className={classes.messageName}>
                        <NavLink to={`/dialogs/${id}`} activeClassName={classes.active}>{name}</NavLink>
                    </div>
                    <div className = {classes.lastEntry}>yesterday</div>
                </div>
                <div className={classes.messageText}>Hello, my dear friend</div>
            </div>
        </div>
    )
}