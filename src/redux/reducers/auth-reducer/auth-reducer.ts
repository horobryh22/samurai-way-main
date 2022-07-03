import {authAPI, AuthUserDataType, profileAPI, UserProfileType} from '../../../api/api';
import {AppDispatch} from '../../redux-store';
import {stopSubmit} from 'redux-form';

export type AuthActionsType =
    ReturnType<typeof setUserDataAC> |
    ReturnType<typeof removeUserDataAC> |
    ReturnType<typeof setAuthUserProfileAC> |
    ReturnType<typeof removeAuthUserProfileAC>;

export type AuthUserStateType = {
    authUserData: AuthUserDataType
    isAuth: boolean
    authUserProfile: UserProfileType
}

const SET_USER_DATA = 'SET-USER-DATA';
const REMOVE_USER_DATA = 'REMOVE-USER-DATA';
const SET_AUTH_USER_PROFILE = 'SET-AUTH-USER-PROFILE';
const REMOVE_AUTH_USER_PROFILE = 'REMOVE-AUTH-USER-PROFILE';

const initialState: AuthUserStateType = {
    isAuth: false,
    authUserData: {} as AuthUserDataType,
    authUserProfile: {} as UserProfileType
}

export const authReducer = (state: AuthUserStateType = initialState, action: AuthActionsType): AuthUserStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, authUserData: action.payload.data, isAuth: action.payload.isAuth}
        case REMOVE_USER_DATA:
            return {...state, authUserData: {} as AuthUserDataType, isAuth: false}
        case SET_AUTH_USER_PROFILE:
            return {...state, authUserProfile: action.payload.profile}
        case REMOVE_AUTH_USER_PROFILE: {
            return {...state, authUserProfile: {} as UserProfileType}
        }
        default:
            return state;
    }
}

export const setUserDataAC = (data: AuthUserDataType, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            data,
            isAuth
        }
    } as const
}

export const removeUserDataAC = () => {
    return {
        type: REMOVE_USER_DATA,
    } as const
}

export const setAuthUserProfileAC = (profile: UserProfileType) => {
    return {
        type: SET_AUTH_USER_PROFILE,
        payload: {
            profile
        }
    } as const
}

export const removeAuthUserProfileAC = () => {
    return {
        type: REMOVE_AUTH_USER_PROFILE,
    } as const
}

export const setAuthUserTC = () => async (dispatch: AppDispatch) => {
    try {
        const data = await authAPI.me();
        if (!data.resultCode) {
            const userData = data.data;
            dispatch(setUserDataAC(userData, true));
            const profile = await profileAPI.getUserProfile(userData.id);
            dispatch(setAuthUserProfileAC(profile));
        }
    } catch (e) {
        const err = e as Error;
        console.error('setAuthUserTC: ' + err.message);
    }
}

export const logInTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: AppDispatch) => {
    try {
        const response = await authAPI.logIn(email, password, rememberMe);
        if (!response.resultCode) {
            dispatch(setAuthUserTC());
        } else {
            throw new Error (response.messages[0]);
        }
    } catch (e) {
        const err = e as Error;
        console.error('getCurrentAuthUserProfile: ' + err.message);
        dispatch(stopSubmit('login', {_error: err.message}));
    }
}

export const logOutTC = () => async (dispatch: AppDispatch) => {
    try {
        const response = await authAPI.logOut();
        if (!response.resultCode) {
            dispatch(removeUserDataAC());
            dispatch(removeAuthUserProfileAC());
        }
    } catch (e) {
        const err = e as Error;
        console.error('getCurrentAuthUserProfile: ' + err.message);
    }
}

