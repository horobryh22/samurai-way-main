import React from 'react';
import classes from './ProfileInfo.module.css'
import {UserProfileType} from '../../../redux/reducers/profile/profile-reducer';


type ProfileInfoPropsType = {
    userProfile: UserProfileType
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({userProfile}) => {

    return (
        <div>
            <div>
                <img className={classes.profileImg}
                     src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2147483647&v=beta&t=MpzHeo7wdMoePy-CjWNPwwMbgDU3ydtdqIXGYFtSisg"
                     alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={`${userProfile?.photos?.large}`} alt=""/>
                ava + descr
            </div>
        </div>
    );
};


