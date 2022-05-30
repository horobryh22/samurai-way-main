import React from 'react';
import classes from './Users.module.css';
import {UsersPageType, UsersTestType} from '../../redux/reducers/users/users-reducer';
import avatar from '../../assets/images/default-avatar.jpeg'
import {NavLink} from 'react-router-dom';

type UsersPropsType = {
    usersCount: number
    pageSize: number
    currentPage: number
    users: Array<UsersTestType>
    changeFollowed: (userId: number) => void
    onClickHandler: (p: number) => void
}

export const Users: React.FC<UsersPropsType> = ({
                                                    usersCount,
                                                    pageSize,
                                                    currentPage,
                                                    users,
                                                    changeFollowed,
                                                    onClickHandler
                                                }) => {

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
                                onClick={() => changeFollowed(u.id)}>{u.followed ? 'Unfollowed' : 'Followed'}</button>
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
};

