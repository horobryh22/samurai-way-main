import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './reducers/profile/profile-reducer';
import {dialogsReducer} from './reducers/dialogs/dialogs-reducer';
import {navbarReducer} from './reducers/navbar/navbar-reducer';
import {usersReducer} from './reducers/users/users-reducer';
import {authReducer} from './reducers/auth-reducer/auth-reducer';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

export type StateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export const store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>




