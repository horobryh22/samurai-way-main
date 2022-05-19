import {connect} from 'react-redux';
import {Users} from './Users';
import {StateType} from '../../redux/redux-store';
import {
    changeFollowedAC,
    setUsersAC,
    UsersActionsType,
    UsersPageType, UsersTestType,
} from '../../redux/reducers/users/users-reducer';

export type MapStatePropsType = {
    usersPage: UsersPageType
}

export type MapDispatchPropsType = {
    changeFollowed: (userId: number) => void
    setUsers: (users: Array<UsersTestType>) => void
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);