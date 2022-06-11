import React from 'react';
import classes from './ProfileInfo.module.css'
import avatar from '../../../assets/images/default-avatar.jpeg'
import {UserProfileType} from '../../../api/api';


type ProfileInfoPropsType = {
    userProfile: UserProfileType
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({userProfile}) => {

    console.log(userProfile);

    return (
        <div>
            <div>
                <img className={classes.profileImg}
                     src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2147483647&v=beta&t=MpzHeo7wdMoePy-CjWNPwwMbgDU3ydtdqIXGYFtSisg"
                     alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={userProfile.photos?.large ? userProfile.photos.large : avatar} alt=""/>
                <div className={classes.userName}>{userProfile.fullName}</div>
            </div>
        </div>
    );
};


