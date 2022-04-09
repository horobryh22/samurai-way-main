import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {postType} from '../../App';

type ProfileType = {
    state: {
        postData: Array<postType>
    }
}

export function Profile({state}: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={state.postData}/>
        </div>
    );
}
