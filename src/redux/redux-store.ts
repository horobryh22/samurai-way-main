import {combineReducers, createStore, Store} from 'redux';
import {ProfileActionsType, profileReducer} from './reducers/profile/profile-reducer';
import {DialogsActionsType, dialogsReducer} from './reducers/dialogs/dialogs-reducer';
import {navbarReducer} from './reducers/navbar/navbar-reducer';
import {DialogsPageType, NavbarType, ProfilePageType} from './store';
import {UsersActionsType, UsersPageType, usersReducer} from './reducers/users/users-reducer';

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navbar: NavbarType
    usersPage: UsersPageType
}

export type ActionTypes = DialogsActionsType | ProfileActionsType | UsersActionsType;

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
})

export const store: Store<StateType, ActionTypes> = createStore(reducers, {});


