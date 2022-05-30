import {PostType} from '../../../components/Profile/MyPosts/Post/Post';
import {PhotosUserType} from '../users/users-reducer';

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

export type UserProfileType = {
    aboutMe: string | null
    contacts: ContactsUserType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number,
    photos: PhotosUserType
}

export type ProfilePageType = typeof initialState;

export type ProfileActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeValuePostActionCreator>
    | ReturnType<typeof setUserProfileAC>;

const ADD_POST = 'ADD-POST';
const CHANGE_VALUE_TEXTAREA_POST = 'CHANGE-VALUE-TEXTAREA-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
    posts: [
        {id: 1, post: 'Tell me how are you friends?', likes: 10},
        {id: 2, post: 'Hello, it is my first posts', likes: 15}
    ] as Array<PostType>,
    postText: '',
    userProfile: {} as UserProfileType
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const setUserProfileAC = (profile: UserProfileType) => ({type: SET_USER_PROFILE, payload: {profile}} as const)
export const changeValuePostActionCreator = (valuePost: string) =>
    ({type: CHANGE_VALUE_TEXTAREA_POST, valuePost} as const);
