import {combineReducers, createStore} from 'redux';
import {profileReducer} from './reducers/profile/profile-reducer';
import {dialogsReducer} from './reducers/dialogs/dialogs-reducer';
import {navbarReducer} from './reducers/navbar/navbar-reducer';
import {usersReducer} from './reducers/users/users-reducer';
import {authReducer} from './reducers/auth-reducer/auth-reducer';

export type StateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, {});




