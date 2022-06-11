import React from 'react';
import classes from '../Users.module.css';
import {NavLink} from 'react-router-dom';
import avatar from '../../../assets/images/default-avatar.jpeg';

type UserPropsType = {
    id: number
    photo: string | null
    name: string
    status: string | null
    followed: boolean
    isChangingFollowStatus: Array<number>
    changeFollowStatus: (id: number, followedStatus: boolean) => void
}
export const User: React.FC<UserPropsType> = ({
                                                  id,
                                                  photo,
                                                  isChangingFollowStatus,
                                                  followed,
                                                  status,
                                                  name,
                                                  changeFollowStatus
                                              }) => {

    return (
        <div key={id} className={classes.userBox}>
            <div className={classes.leftBox}>
                <NavLink to={`/profile/${id}`}>
                    <img src={photo ? photo : avatar} alt="avatar"/>
                </NavLink>
                <button
                    disabled={isChangingFollowStatus.some(id => id === id)}
                    onClick={() => changeFollowStatus(id, followed)}
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