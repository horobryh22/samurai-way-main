import {Action, combineReducers, createStore, Store} from 'redux';
import {profileReducer} from './reducers/profile-reducer';
import {dialogsReducer} from './reducers/dialogs-reducer';
import {navbarReducer} from './reducers/navbar-reducer';
import {ActionTypes, StateType} from './store';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer
})

export const store: Store<StateType, ActionTypes> = createStore(reducers, {});


