import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';


type ProfileType = {
    profilePage:ProfilePageType
    addPost: (messagePost:string) => void
    changeValueTextareaPost: (value: string) => void
}

export const Profile: React.FC<ProfileType> = ({profilePage, addPost, changeValueTextareaPost}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={profilePage.posts} textareaValue = {profilePage.textareaValue} addPost={addPost} changeValueTextareaPost={changeValueTextareaPost}/>
        </div>
    );
}
