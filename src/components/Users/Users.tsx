import React from 'react';
import classes from './Users.module.css';
import {MapDispatchPropsType, MapStatePropsType} from './UsersContainer';
import axios, {AxiosResponse} from 'axios';
import {UsersPageType, UsersTestType} from '../../redux/reducers/users/users-reducer';
import avatar from '../../assets/images/default-avatar.jpeg'

type DataType = {
    error: null | string
    items: Array<UsersTestType>
    totalCount: number
}

type UsersPropsType = {
    usersPage: UsersPageType
    changeFollowed: (userId: number) => void
    onClickHandler: (p: number) => void
}

export const Users: React.FC<UsersPropsType> = ({usersPage, changeFollowed, onClickHandler}) => {

    const pagesCount = Math.ceil(usersPage.usersCount / usersPage.pageSize);
    const pages = [];

    for (let i = 0; i < pagesCount; i++) {
        pages[i] = i + 1
    }

    const mappedPages = pages.map(p => {
        return (
            <div
                className={usersPage.currentPage === p ? classes.activeNumberPage : classes.numberPage}
                onClick={() => onClickHandler(p)}
            >{p}</div>
        )
    });

    return (
        <div className={classes.userPage}>
            <div className={classes.pagesBox}>
                {mappedPages}
            </div>
            {usersPage.users.map(u => {
                return (
                    <div key={u.id} className={classes.userBox}>
                        <div className={classes.leftBox}>
                            <img src={u.photos.small ? u.photos.small : avatar} alt="avatar"/>
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

