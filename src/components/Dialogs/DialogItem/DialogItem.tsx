import classes from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

type DialogItemType = {
    name: string
    id: number
}

export function DialogItem({name, id}: DialogItemType) {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${id}`} activeClassName={classes.active}>{name}</NavLink>
        </div>
    )
}