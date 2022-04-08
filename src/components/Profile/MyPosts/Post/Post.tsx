import classes from './Post.module.css';
import React from 'react';

type PostPropsType = {
    message: string
    likes: number
}

export function Post({message, likes}: PostPropsType) {
    return (
        <div className={classes.item}>
            <img src="http://archilab.online/images/1/123.jpg" alt=""/>
            {message}
            <div>
                <img src="https://www.iconpacks.net/icons/2/free-instagram-like-icon-3507-thumb.png" alt=""/>
                <span>{likes}</span>
            </div>
        </div>
    );
}
