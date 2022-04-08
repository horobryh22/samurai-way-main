import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {postType} from '../../App';

type ProfileType = {
    postData: Array<postType>
}

export function Profile({postData}: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>
    );
}
