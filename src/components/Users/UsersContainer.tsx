import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {
    changeCurrentPageAC,
    changeFollowedAC,
    setTotalCountAC,
    setUsersAC, toggleIsFetchingAC,
    UsersActionsType,
    UsersPageType,
    UsersTestType,
} from '../../redux/reducers/users/users-reducer';
import React from 'react';
import {Users} from './Users';
import axios, {AxiosResponse} from 'axios';
import {Preloader} from '../common/Preloader/Preloader';

export type MapStatePropsType = {
    usersPage: UsersPageType
}

export type MapDispatchPropsType = {
    changeFollowed: (userId: number) => void
    setTotalCount: (totalCount: number) => void
    setUsers: (users: Array<UsersTestType>) => void
    changeCurrentPage: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

type DataType = {
    error: null | string
    items: Array<UsersTestType>
    totalCount: number
}

type UsersContainerPropsType = MapDispatchPropsType & MapStatePropsType;

export class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`)
            .then((response: AxiosResponse<DataType>) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    onClickHandler = (p: number) => {
        this.props.toggleIsFetching(true);
        this.props.changeCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${p}`)
            .then((response: AxiosResponse<DataType>) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return (
            <>
                {this.props.usersPage.isFetching && <Preloader/>}
                <Users changeFollowed={this.props.changeFollowed} usersPage={this.props.usersPage}  onClickHandler={this.onClickHandler}/>
            </>
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);