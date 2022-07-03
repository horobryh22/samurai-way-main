import {
    authReducer,
    AuthUserStateType, removeAuthUserProfileAC, removeUserDataAC, setAuthUserProfileAC, setUserDataAC,
} from './auth-reducer';
import {AuthUserDataType, UserProfileType} from '../../../api/api';

let initialState: AuthUserStateType

beforeEach(() => {

    initialState = {
        isAuth: false,
        authUserData: {} as AuthUserDataType,
        authUserProfile: {} as UserProfileType
    }
})

test('Authorized user data should be set to the state', () => {

    const authUserData: AuthUserDataType = {
        id: 24040,
        login: 'horobryh22',
        email: 'hvi17@yandex.ru'
    }

    const newState = authReducer(initialState, setUserDataAC(authUserData, true));

    expect(newState.isAuth).toBeTruthy();
    expect(newState.authUserProfile).toEqual({});
    expect(newState.authUserData).toEqual({ id: 24040, login: 'horobryh22', email: 'hvi17@yandex.ru'});
})

test('Authorized user data should be removed from the state', () => {

    const newState = authReducer(initialState, removeUserDataAC());

    expect(newState.isAuth).toBeFalsy();
    expect(newState.authUserData).toEqual({});
    expect(newState.authUserProfile).toEqual({});
})

test('Authorized user profile data should be set to the state', () => {

    const userProfile: UserProfileType = {
        aboutMe: 'I like to programming',
        userId: 1,
        contacts: {
            youtube: null,
            website: null,
            twitter: null,
            vk: null,
            mainLink: null,
            instagram: null,
            github: null,
            facebook: null
        },
        fullName: 'Ilya Khororbrykh',
        photos: {
            large: null,
            small: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'I want to work in programming sphere'
    }

    const newState = authReducer(initialState, setAuthUserProfileAC(userProfile));

    expect(newState.authUserProfile).toEqual(userProfile);
    expect(newState.authUserData).toEqual({});
    expect(newState.isAuth).toBeFalsy();

})

test('Authorized user profile data should be set to the state', () => {

    const newState = authReducer(initialState, removeAuthUserProfileAC());

    expect(newState.authUserProfile).toEqual({});
    expect(newState.authUserData).toEqual({});
    expect(newState.isAuth).toBeFalsy();
})
