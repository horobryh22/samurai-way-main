import {authAPI, profileAPI, UserProfileType, usersAPI} from '../../../api/api';
import {AppDispatch} from '../../redux-store';


export type AuthActionsType = ReturnType<typeof setCurrentAuthUserAC>;
export type AuthUserStateType = typeof initialState;
export type AuthUserDataType = {
    id: number
    email: string
    login: string
};

const SET_CURRENT_AUTH_USER = 'SET-CURRENT-AUTH-USER';

const initialState = {
    currentAuthUser: {} as UserProfileType,
    isAuth: false
}

export const authReducer = (state: AuthUserStateType = initialState, action: AuthActionsType): AuthUserStateType => {
    switch (action.type) {
        case SET_CURRENT_AUTH_USER:
            return {...state, currentAuthUser: {...action.payload}, isAuth: true}
        default:
            return state;
    }
}

export const setCurrentAuthUserAC = (data: UserProfileType) => {
    return {
        type: SET_CURRENT_AUTH_USER,
        payload: {
            ...data
        }
    }
}

export const getCurrentAuthUserProfileTC = () => async (dispatch: AppDispatch) => {
    try {
        const data = await authAPI.becomeAuthUser();
        const profile = await profileAPI.getUserProfile(data.data.id);
        dispatch(setCurrentAuthUserAC(profile));
    } catch (e) {
        const err = e as Error;
        console.error('getCurrentAuthUserProfile: ' + err.message);
    }
}

