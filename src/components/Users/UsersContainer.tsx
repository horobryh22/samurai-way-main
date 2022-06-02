import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {
    changeCurrentPage,
    changeFollowed,
    setTotalCount,
    setUsers, toggleChangingFollowStatus,
    toggleIsFetching,
    UsersTestType,
} from '../../redux/reducers/users/users-reducer';
import React from 'react';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {DataType, users} from '../../api/api';

export type MapStatePropsType = {
    users: Array<UsersTestType>
    pageSize: number
    usersCount: number
    currentPage: number
    isFetching: boolean
    isChangingFollowStatus: Array<number>
}

export type UsersContainerPropsType = MapStatePropsType & {
    changeFollowed: (userId: number) => void
    setTotalCount: (totalCount: number) => void
    setUsers: (users: Array<UsersTestType>) => void
    changeCurrentPage: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleChangingFollowStatus: (isChanging: boolean, id: number) => void
};

export class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        users.getUsers(this.props.pageSize, this.props.currentPage)
            .then((data: DataType) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
            })
    }

    onClickHandler = (p: number) => {
        this.props.toggleIsFetching(true);
        this.props.changeCurrentPage(p);
        users.getUsers(this.props.pageSize, p)
            .then((data: DataType) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <Users
                    {...this.props}
                    onClickHandler={this.onClickHandler}
                />
            </>
        );
    }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isChangingFollowStatus: state.usersPage.isChangingFollowStatus
    }
}

export default connect(mapStateToProps, {
    changeFollowed,
    setUsers,
    changeCurrentPage,
    setTotalCount,
    toggleIsFetching,
    toggleChangingFollowStatus
})(UsersContainer);