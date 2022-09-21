import {AppThunk} from '../../redux-store';
import {setAuthUserTC} from '../auth-reducer/auth-reducer';

export type AppActionsType = ReturnType<typeof initializeAppAC>;

export type AuthUserStateType = {
    isAppInitialized: boolean
}

const INITIALIZE_APP = 'INITIALIZE-APP';

const initialState: AuthUserStateType = {
    isAppInitialized: false,
}

export const appReducer = (state: AuthUserStateType = initialState, action: AppActionsType): AuthUserStateType => {
    switch (action.type) {
        case INITIALIZE_APP:
            return {...state, isAppInitialized: true}
        default:
            return state;
    }
}

export const initializeAppAC = () => {
    return {
        type: INITIALIZE_APP
    } as const
}

export const initializeAppTC = (): AppThunk => async (dispatch) => {
    try {
        await dispatch(setAuthUserTC());
        dispatch(initializeAppAC());
    } catch (e) {
        const err = e as Error;
        console.error('initializeApp: ' + err.message);
    }
}
