import {PostType} from '../../../components/Profile/MyPosts/Post/Post';
import {profileAPI, UserProfileType} from '../../../api/api';
import {AppDispatch} from '../../redux-store';

export type ContactsUserType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}


export type ProfilePageType = typeof initialState;

export type ProfileActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeValuePostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserStatusAC>;

const ADD_POST = 'ADD-POST';
const SET_USER_STATUS = 'SET-USER-STATUS';
const CHANGE_VALUE_TEXTAREA_POST = 'CHANGE-VALUE-TEXTAREA-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
    posts: [
        {id: 1, post: 'Tell me how are you friends?', likes: 10},
        {id: 2, post: 'Hello, it is my first posts', likes: 15}
    ] as Array<PostType>,
    postText: '',
    userProfile: {} as UserProfileType,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                post: state.postText,
                likes: 0
            }
            return {...state, posts: [newPost, ...state.posts], postText: ''}

        case CHANGE_VALUE_TEXTAREA_POST:
            return {...state, postText: action.valuePost}
        case SET_USER_PROFILE:
            return {...state, userProfile: {...action.payload.profile}};
        case SET_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST} as const);
export const setUserStatusAC = (status: string) => ({type: SET_USER_STATUS, status} as const);
export const setUserProfileAC = (profile: UserProfileType) => ({type: SET_USER_PROFILE, payload: {profile}} as const)
export const changeValuePostAC = (valuePost: string) =>
    ({type: CHANGE_VALUE_TEXTAREA_POST, valuePost} as const);

export const getUserProfileTC = (userId: string) => async (dispatch: AppDispatch) => {
    try {
        const profile = await profileAPI.getUserProfile(Number(userId));
        dispatch(setUserProfileAC(profile));
    } catch (e) {
        const err = e as Error;
        console.error('getUserProfile: ' + err.message);
    }
}

export const getUserStatusTC = (id: string) => async (dispatch: AppDispatch) => {
    try {
        const status = await profileAPI.getUserStatus(id);
        dispatch(setUserStatusAC(status));
    } catch (e) {
        const err = e as Error;
        console.error('getUserStatus: ' + err.message);
    }
}

export const updateUserStatusTC = (userStatus: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await profileAPI.updateUserStatus(userStatus);
        if (!response.resultCode) {
            dispatch(setUserStatusAC(userStatus));
        } else {
            throw new Error('Can not get user status from server');
        }
    } catch (e) {
        const err = e as Error;
        console.error('getUserStatus: ' + err.message);
    }
}