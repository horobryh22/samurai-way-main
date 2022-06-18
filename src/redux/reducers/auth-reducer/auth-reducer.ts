import {authAPI, profileAPI, UserProfileType, usersAPI} from '../../../api/api';
import {AppDispatch} from '../../redux-store';


export type AuthActionsType = ReturnType<typeof setCurrentAuthUserAC>;
export type AuthUserStateType = typeof initialState;
export type AuthUserDataType = {
    id: number
    email: string
    login: string
    userId: number
};

const SET_CURRENT_AUTH_USER = 'SET-CURRENT-AUTH-USER';
const DELETE_CURRENT_AUTH_USER = 'DELETE-CURRENT-AUTH-USER';

const initialState = {
    currentAuthUser: {} as UserProfileType,
    isAuth: false
}

export const authReducer = (state: AuthUserStateType = initialState, action: AuthActionsType): AuthUserStateType => {
    switch (action.type) {
        case SET_CURRENT_AUTH_USER:
            return {...state, currentAuthUser: {...action.payload}, isAuth: true}
        case DELETE_CURRENT_AUTH_USER:
            return {...state, currentAuthUser: {} as UserProfileType, isAuth: false}
        default:
            return state;
    }
}

export const setCurrentAuthUserAC = (data: UserProfileType) => {
    return {
        type: SET_CURRENT_AUTH_USER,
        payload: {
            ...data
        } as const
    }
}

export const deleteCurrentAuthUserAC = () => {
    return {
        type: DELETE_CURRENT_AUTH_USER,
    } as const
}

export const logInTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: AppDispatch) => {
    try {
        const response = await authAPI.logIn(email, password, rememberMe);
        if (!response.resultCode) {
            const id = response.data.userId;
            const profile = await profileAPI.getUserProfile(id);
            dispatch(setCurrentAuthUserAC(profile));
        }
    } catch (e) {
        const err = e as Error;
        console.error('getCurrentAuthUserProfile: ' + err.message);
    }
}

export const logOutTC = () => async (dispatch: AppDispatch) => {
    try {
        const response = await authAPI.logOut();
        if (!response.resultCode) {
            dispatch(deleteCurrentAuthUserAC())
        }
    } catch (e) {
        const err = e as Error;
        console.error('getCurrentAuthUserProfile: ' + err.message);
    }
}

