import {combineReducers, createStore} from 'redux';
import {profileReducer} from './reducers/profile-reducer';
import {dialogsReducer} from './reducers/dialogs-reducer';
import {navbarReducer} from './reducers/navbar-reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer
})

export const store = createStore(reducers, {});
