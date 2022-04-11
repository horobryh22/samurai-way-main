import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';


type ProfileType = {
    profilePage:ProfilePageType
    addPost: (messagePost:string) => void
}

export const Profile: React.FC<ProfileType> = ({profilePage, addPost}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={profilePage.posts} addPost={addPost}/>
        </div>
    );
}
