import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileContainerPropsType} from './ProfileContainer';

type ProfilePropsType = ProfileContainerPropsType;

export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    );
};
