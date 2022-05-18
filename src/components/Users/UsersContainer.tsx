import {connect} from 'react-redux';
import {Users} from './Users';
import {StateType} from '../../redux/redux-store';
import {changeFollowedAC, setUsersAC, UsersActionsType, UserType} from '../../redux/reducers/users/users-reducer';


const mapStateToProps = (state: StateType) => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: (action: UsersActionsType) => void) => {
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