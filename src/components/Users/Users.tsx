import React from 'react';
import classes from './Users.module.css';
import avatar from '../../assets/images/default-avatar.jpeg'
import {NavLink} from 'react-router-dom';
import {followStatus, ResponseDataType} from '../../api/api';
import {UsersContainerPropsType} from './UsersContainer';

type UsersPropsType = UsersContainerPropsType & {
    onClickHandler: (p: number) => void
}

export const Users: React.FC<UsersPropsType> = React.memo(({
                                                               usersCount,
                                                               pageSize,
                                                               currentPage,
                                                               users,
                                                               changeFollowed,
                                                               onClickHandler,
                                                               toggleChangingFollowStatus,
                                                               isChangingFollowStatus,
                                                           }) => {

        console.log(isChangingFollowStatus);

        const pagesCount = Math.ceil(usersCount / pageSize);
        const pages = [];

        for (let i = 0; i < pagesCount; i++) {
            pages[i] = i + 1
        }

        const mappedPages = pages.map((p, i) => {
            return (
                <div
                    key={i}
                    className={currentPage === p ? classes.activeNumberPage : classes.numberPage}
                    onClick={() => onClickHandler(p)}
                >{p}</div>
            )
        });

        return (
            <div className={classes.userPage}>
                <div className={classes.pagesBox}>
                    {mappedPages}
                </div>
                {users.map(u => {
                    return (
                        <div key={u.id} className={classes.userBox}>
                            <div className={classes.leftBox}>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img src={u.photos.small ? u.photos.small : avatar} alt="avatar"/>
                                </NavLink>
                                <button
                                    disabled={isChangingFollowStatus.some(id => id === u.id)}
                                    onClick={() => {

                                        toggleChangingFollowStatus(true, u.id);

                                        if (!u.followed) {
                                            followStatus.addUserToFriends(u.id)
                                                .then((data: ResponseDataType) => {
                                                    if (!data.resultCode) {
                                                        changeFollowed(u.id);
                                                        toggleChangingFollowStatus(false, u.id);
                                                    }
                                                })
                                        }

                                        if (u.followed) {
                                            followStatus.removeUserFromFriends(u.id)
                                                .then((data: ResponseDataType) => {
                                                    if (!data.resultCode) {
                                                        changeFollowed(u.id);
                                                        toggleChangingFollowStatus(false, u.id);
                                                    }
                                                })
                                        }


                                    }}>{u.followed ? 'Unfollowed' : 'Followed'}</button>
                            </div>
                            <div className={classes.rightBox}>
                                <div className={classes.topRightBox}>
                                    <div>{u.name}</div>
                                    <div>
                                        {/*{`${u.location.country}, ${u.location.city}`}*/}
                                    </div>
                                </div>
                                <div className={classes.bottomRightBox}>
                                    {u.status}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
)

