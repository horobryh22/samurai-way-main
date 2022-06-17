import React from 'react';
import classes from './ProfileInfo.module.css'
import avatar from '../../../assets/images/default-avatar.jpeg'
import {UserProfileType} from '../../../api/api';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';


type ProfileInfoPropsType = {
    updateUserStatus: (status: string) => void
    userProfile: UserProfileType
    status: string
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({userProfile, status, updateUserStatus}) => {
    return (
        <>
            <div className={classes.descriptionBlock}>
                <img src={userProfile.photos?.large ? userProfile.photos.large : avatar} alt=""/>
                <div className={classes.userName}>{userProfile.fullName}</div>
            </div>
            <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
        </>
    );
};


