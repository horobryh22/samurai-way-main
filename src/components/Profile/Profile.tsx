import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionType, ProfilePageType} from '../../redux/state';


type ProfileType = {
    profilePage:ProfilePageType
    dispatch: (action: ActionType) => void
}

export const Profile: React.FC<ProfileType> = ({profilePage, dispatch}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={profilePage.posts} dispatch={dispatch} textareaValue = {profilePage.textareaValue} />
        </div>
    );
}
