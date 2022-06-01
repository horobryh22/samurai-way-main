import {UserProfileType} from '../../../api/api';


export type AuthActionsType = ReturnType<typeof setAuthUserDataAC> | ReturnType<typeof setCurrentAuthUserAC>;
export type AuthUserStateType = typeof initialState;
export type AuthUserDataType = {
    id: number
    email: string
    login: string
};

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_CURRENT_AUTH_USER = 'SET-CURRENT-AUTH-USER';

const initialState = {
    userData: {} as AuthUserDataType,
    currentAuthUser: {} as UserProfileType,
    isAuth: false
}

export const authReducer = (state:AuthUserStateType = initialState, action: AuthActionsType):AuthUserStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return <AuthUserStateType>{...state, userData: {...action.payload}, isAuth: true}
        case SET_CURRENT_AUTH_USER:
            return <AuthUserStateType>{...state, currentAuthUser: {...action.payload}}
        default:
            return state;
    }
}

export const setAuthUserDataAC = (data: AuthUserDataType) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {
            ...data
        }
    } as const
}

export const setCurrentAuthUserAC = (data: UserProfileType) => {
    return {
        type: SET_CURRENT_AUTH_USER,
        payload: {
            ...data
        }
    }
}

