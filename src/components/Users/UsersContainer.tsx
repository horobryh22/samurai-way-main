import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {
    changeCurrentPage,
    changeFollowed,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    UsersTestType,
} from '../../redux/reducers/users/users-reducer';
import React from 'react';
import {Users} from './Users';
import axios, {AxiosResponse} from 'axios';
import {Preloader} from '../common/Preloader/Preloader';

type DataType = {
    error: null | string
    items: Array<UsersTestType>
    totalCount: number
}

export type MapStatePropsType = {
    users: Array<UsersTestType>
    pageSize: number
    usersCount: number
    currentPage: number
    isFetching: boolean
}

type UsersContainerPropsType = MapStatePropsType & {
    changeFollowed: (userId: number) => void
    setTotalCount: (totalCount: number) => void
    setUsers: (users: Array<UsersTestType>) => void
    changeCurrentPage: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
};

export class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {withCredentials: true})
            .then((response: AxiosResponse<DataType>) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    onClickHandler = (p: number) => {
        this.props.toggleIsFetching(true);
        this.props.changeCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`, {withCredentials: true})
            .then((response: AxiosResponse<DataType>) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <Users
                    changeFollowed={this.props.changeFollowed}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    usersCount={this.props.usersCount}
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
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch: (action: UsersActionsType) => void): MapDispatchPropsType => {
//     return {
//         changeFollowed: (userId: number) => {
//             dispatch(changeFollowedAC(userId));
//         },
//         setUsers: (users: Array<UsersTestType>) => {
//             dispatch(setUsersAC(users));
//         },
//         changeCurrentPage: (pageNumber: number) => {
//             dispatch(changeCurrentPageAC(pageNumber))
//         },
//         setTotalCount: (totalCount: number) => {
//             dispatch(setTotalCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }

// мы переписали наш код короче, избавились от функции mapDispatchToProps  и теперь вместо нее передаем объект с нашими экшн креэйторами, а уже внутри себя функция коннект оборачивает их колбэками и посути ничего не меняется, просто уменьшаем наш код.

export default connect(mapStateToProps, {
    changeFollowed,
    setUsers,
    changeCurrentPage,
    setTotalCount,
    toggleIsFetching
})(UsersContainer);