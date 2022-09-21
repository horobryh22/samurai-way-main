import {connect} from 'react-redux';
import {AppDispatch, StateType} from '../../redux/redux-store';
import {
    changeCurrentPageAC,
    changeFollowStatusTC,
    getUsersTC,
    UserDataType,
} from '../../redux/reducers/users/users-reducer';
import React, {ComponentType} from 'react';
import {Users} from './Users';
import {Preloader} from '../common/components/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getIsChangingFollowStatus,
    getIsFetching,
    getPageSize,
    getUsersCount, selectUsers
} from '../../redux/selectors/users-selectors/user-selectors';

export type MapStatePropsType = {
    users: Array<UserDataType>
    pageSize: number
    usersCount: number
    currentPage: number
    isFetching: boolean
    isChangingFollowStatus: Array<number>
}

export type MapDispatchToProps = {
    changeCurrentPage: (pageNumber: number) => void
    getUsers: (pageSize: number, currentPage: number) => void
    changeFollowStatus: (id: number, followedStatus: boolean) => void
}

export type UsersContainerPropsType = MapStatePropsType & MapDispatchToProps;

export class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    onClickHandler = (p: number) => {
        this.props.changeCurrentPage(p);
        this.props.getUsers(this.props.pageSize, p);
    }

    componentWillUnmount() {
        this.props.changeCurrentPage(1);
    }

    render() {
        console.log('users rerender')
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
    console.log('mstp users')
    return {
        users: selectUsers(state),
        pageSize: getPageSize(state),
        usersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isChangingFollowStatus: getIsChangingFollowStatus(state)
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        changeCurrentPage: (pageNumber: number) => {
            dispatch(changeCurrentPageAC(pageNumber));
        },
        getUsers: async (pageSize: number, currentPage: number) => {
            await dispatch(getUsersTC(pageSize, currentPage));
        },
        changeFollowStatus: async (id: number, followedStatus: boolean) => {
            await dispatch(changeFollowStatusTC(id, followedStatus));
        }
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps))
(UsersContainer)