import React from 'react';
import classes from './Users.module.css';
import {UsersTestType} from '../../redux/reducers/users/users-reducer';
import avatar from '../../assets/images/default-avatar.jpeg'
import {NavLink} from 'react-router-dom';
import axios, {AxiosResponse} from 'axios';
import {ResponseDataType} from '../Header/HeaderContainer';

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
                                onClick={() => {

                                    if (!u.followed) {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true, headers: {
                                            'API-KEY': 'd73ac9ac-03b0-4f3d-b9fd-ef31da93967f'
                                            }})
                                            .then((response: AxiosResponse<ResponseDataType>) => {
                                                if (!response.data.resultCode) {
                                                    changeFollowed(u.id);
                                                }
                                            })
                                    }

                                    if (u.followed) {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {withCredentials: true, headers: {
                                                'API-KEY': 'd73ac9ac-03b0-4f3d-b9fd-ef31da93967f'
                                            }})
                                            .then((response: AxiosResponse<ResponseDataType>) => {
                                                if (!response.data.resultCode) {
                                                    changeFollowed(u.id);
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
};

