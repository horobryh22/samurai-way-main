import {connect} from 'react-redux';
import {Users} from './Users';
import {StateType} from '../../redux/redux-store';
import {
    changeFollowedAC,
    setUsersAC,
    UsersActionsType,
    UsersPageType,
    UserType
} from '../../redux/reducers/users/users-reducer';

export type MapStatePropsType = {
    usersPage: UsersPageType
}

export type MapDispatchPropsType = {
    changeFollowed: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
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
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);