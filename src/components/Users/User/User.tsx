import React from 'react';
import classes from '../Users.module.css';
import {NavLink} from 'react-router-dom';
import avatar from '../../../assets/images/default-avatar.jpeg';

type UserPropsType = {
    userId: number
    photo: string | null
    name: string
    status: string | null
    followed: boolean
    isChangingFollowStatus: Array<number>
    changeFollowStatus: (id: number, followedStatus: boolean) => void
}
export const User: React.FC<UserPropsType> = ({
                                                  userId,
                                                  photo,
                                                  isChangingFollowStatus,
                                                  followed,
                                                  status,
                                                  name,
                                                  changeFollowStatus
                                              }) => {

    return (
        <div key={userId} className={classes.userBox}>
            <div className={classes.leftBox}>
                <NavLink to={`/profile/${userId}`}>
                    <img src={photo ? photo : avatar} alt="avatar"/>
                </NavLink>
                <button
                    disabled={isChangingFollowStatus.some(id => id === userId)}
                    onClick={() => changeFollowStatus(userId, followed)}
                >{followed ? 'Unfollowed' : 'Followed'}</button>
            </div>
            <div className={classes.rightBox}>
                <div className={classes.topRightBox}>
                    <div>{name}</div>
                    <div>
                        {/*{`${u.location.country}, ${u.location.city}`}*/}
                    </div>
                </div>
                <div className={classes.bottomRightBox}>
                    {status}
                </div>
            </div>
        </div>
    )
}