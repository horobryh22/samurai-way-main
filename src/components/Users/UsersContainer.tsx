import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {
    changeCurrentPageAC,
    changeFollowedAC,
    setTotalCountAC,
    setUsersAC,
    UsersActionsType,
    UsersPageType,
    UsersTestType,
} from '../../redux/reducers/users/users-reducer';
import React from 'react';
import {Users} from './Users';
import axios, {AxiosResponse} from 'axios';

export type MapStatePropsType = {
    usersPage: UsersPageType
}

export type MapDispatchPropsType = {
    changeFollowed: (userId: number) => void
    setTotalCount: (totalCount: number) => void
    setUsers: (users: Array<UsersTestType>) => void
    changeCurrentPage: (pageNumber: number) => void
}

type DataType = {
    error: null | string
    items: Array<UsersTestType>
    totalCount: number
}

type UsersContainerPropsType = MapDispatchPropsType & MapStatePropsType;

export class UsersContainer extends React.Component<UsersContainerPropsType> {

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
        return (
            <Users changeFollowed={this.props.changeFollowed} usersPage={this.props.usersPage}  onClickHandler={this.onClickHandler}/>
        );
    }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: (action: UsersActionsType) => void): MapDispatchPropsType => {
    return {
        changeFollowed: (userId: number) => {
            dispatch(changeFollowedAC(userId));
        },
        setUsers: (users: Array<UsersTestType>) => {
            dispatch(setUsersAC(users));
        },
        changeCurrentPage: (pageNumber: number) => {
            dispatch(changeCurrentPageAC(pageNumber))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);