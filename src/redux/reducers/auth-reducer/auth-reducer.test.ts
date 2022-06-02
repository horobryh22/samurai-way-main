import {
    authReducer,
    AuthUserDataType,
    AuthUserStateType,
    setAuthUserDataAC,
    setCurrentAuthUserAC
} from './auth-reducer';
import {UserProfileType} from '../../../api/api';

let initialState: AuthUserStateType

beforeEach(() => {

    initialState = {
        userData: {} as AuthUserDataType,
        currentAuthUser: {} as UserProfileType,
        isAuth: false
    }
})

test('Data of only authorized user should be set', () => {

    const userDataFromServer: AuthUserDataType = {
        id: 200200,
        email: 'hvi17@yandex.ru',
        login: 'horobryh22'
    }

    const newState = authReducer(initialState, setAuthUserDataAC(userDataFromServer));

    expect(Object.keys(newState).length).toBe(3);
    expect(Object.keys(newState.userData)).toEqual(Object.keys(userDataFromServer));
    expect(newState.userData.login).toBe('horobryh22');

});

test ('Just profile of current authorized user should shown on the "Profile" page', () => {

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

    const newState = authReducer(initialState, setCurrentAuthUserAC(userProfile));


    expect(Object.keys(newState).length).toBe(3);
    expect(Object.keys(newState.currentAuthUser)).toEqual(Object.keys(userProfile));
    expect(Object.values(newState.currentAuthUser)).toEqual(Object.values(userProfile));
    expect(Object.values(newState.currentAuthUser)[3]).toEqual('Ilya Khororbrykh');
    expect(newState.currentAuthUser.photos.small).toBeNull();
})