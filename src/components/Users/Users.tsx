import React from 'react';
import classes from './Users.module.css';
import {UsersContainerPropsType} from './UsersContainer';
import {User} from './User/User';

type UsersPropsType = UsersContainerPropsType & {
    onClickHandler: (p: number) => void
}

export const Users: React.FC<UsersPropsType> = React.memo(({
                                                               usersCount,
                                                               pageSize,
                                                               currentPage,
                                                               users,
                                                               onClickHandler,
                                                               ...restProps
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
                        <User
                            key={u.id}
                            userId={u.id}
                            followed={u.followed}
                            name={u.name}
                            status={u.status}
                            photo={u.photos.small}
                            {...restProps}
                        />
                    )
                })}
            </div>
        );
    }
)

