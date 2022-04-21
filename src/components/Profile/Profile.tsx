import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionTypes, ProfilePageType} from '../../redux/state';


type ProfileType = {
    profilePage:ProfilePageType
    dispatch: (action: ActionTypes) => void
}

export const Profile: React.FC<ProfileType> = ({profilePage, dispatch}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={profilePage.posts} dispatch={dispatch} textareaValue = {profilePage.postText} />
        </div>
    );
}
