import React from 'react';
import classes from './Users.module.css';
import {MapDispatchPropsType, MapStatePropsType} from './UsersContainer';

export type UsersPropsType = MapDispatchPropsType & MapStatePropsType;

export const Users: React.FC<UsersPropsType> = ({usersPage, changeFollowed, setUsers}) => {

    if (usersPage.users.length === 0) {
        setUsers([
            {
                id: 1,
                fullName: 'Ilya Khorobrykh',
                avatar: 'https://sun1-29.userapi.com/s/v1/if1/_dOpUfCXVAKZDFyeIDyBwa_6fWk8MFZhlRsPMr7afbh3cRjAblOOQwhGau9HF1i7wc7Z65zY.jpg?size=200x200&quality=96&crop=57,0,309,309&ava=1',
                location: {
                    city: 'Omsk',
                    country: 'Russia'
                },
                status: 'I enjoy programming',
                followed: true,
            },
            {
                id: 2,
                fullName: 'Ilya Khorobrykh',
                avatar: 'https://sun1-29.userapi.com/s/v1/if1/_dOpUfCXVAKZDFyeIDyBwa_6fWk8MFZhlRsPMr7afbh3cRjAblOOQwhGau9HF1i7wc7Z65zY.jpg?size=200x200&quality=96&crop=57,0,309,309&ava=1',
                location: {
                    city: 'Omsk',
                    country: 'Russia'
                },
                status: 'I enjoy reading',
                followed: false,
            },
            {
                id: 3,
                fullName: 'Ilya Khorobrykh',
                avatar: 'https://sun1-29.userapi.com/s/v1/if1/_dOpUfCXVAKZDFyeIDyBwa_6fWk8MFZhlRsPMr7afbh3cRjAblOOQwhGau9HF1i7wc7Z65zY.jpg?size=200x200&quality=96&crop=57,0,309,309&ava=1',
                location: {
                    city: 'Omsk',
                    country: 'Russia'
                },
                status: 'I enjoy sport',
                followed: true,
            },

        ]);
    }

    return (
        <div className={classes.userPage}>
            {usersPage.users.map(u => {
                return (
                    <div className={classes.userBox}>
                        <div className={classes.leftBox}>
                            <img src={u.avatar} alt='avatar'/>
                            <button onClick={() => changeFollowed(u.id)}>{u.followed ? 'Unfollowed' : 'Followed'}</button>
                        </div>
                        <div className={classes.rightBox}>
                            <div className={classes.topRightBox}>
                                <div>{u.fullName}</div>
                                <div>
                                    {`${u.location.country}, ${u.location.city}`}
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

