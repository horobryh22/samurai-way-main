import React from 'react';
import classes from './Users.module.css';
import {UsersTestType} from '../../redux/reducers/users/users-reducer';
import avatar from '../../assets/images/default-avatar.jpeg'
import {UsersPropsType} from './Users';
import axios, {AxiosResponse} from 'axios';

type DataType = {
    error: null | string
    items: Array<UsersTestType>
    totalCount: number
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`)
            .then((response: AxiosResponse<DataType>) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    onClickHandler = (p: number) => {
        this.props.changeCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${p}`)
            .then((response: AxiosResponse<DataType>) => {
                this.props.setUsers(response.data.items);
            })
    }


    render() {

        const pagesCount = Math.ceil(this.props.usersPage.usersCount / this.props.usersPage.pageSize);
        const pages = [];

        for (let i = 0; i < pagesCount; i++) {
            pages[i] = i + 1
        }

        const mappedPages = pages.map(p => {
            return (
                <div
                    className={this.props.usersPage.currentPage === p ? classes.activeNumberPage : classes.numberPage}
                    onClick={() => this.onClickHandler(p)}
                >{p}</div>
            )
        });

        return (
            <div className={classes.userPage}>
                <div className={classes.pagesBox}>
                    {mappedPages}
                </div>
                {this.props.usersPage.users.map(u => {
                    return (
                        <div key={u.id} className={classes.userBox}>
                            <div className={classes.leftBox}>
                                <img src={u.photos.small ? u.photos.small : avatar} alt="avatar"/>
                                <button
                                    onClick={() => this.props.changeFollowed(u.id)}>{u.followed ? 'Unfollowed' : 'Followed'}</button>
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
}