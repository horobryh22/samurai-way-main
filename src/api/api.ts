import axios from 'axios';
import {PhotosUserType, UserDataType} from '../redux/reducers/users/users-reducer';
import {ContactsUserType} from '../redux/reducers/profile/profile-reducer';

export type RequestType = 'post' | 'delete';

export type GetUsersResponseType = {
    error: null | string
    items: Array<UserDataType>
    totalCount: number
}

export type ResponseType<D = {}> = {
    data: D
    messages: Array<any>
    resultCode: number
}

export type AuthUserDataType = {
    id: number
    email: string
    login: string
};

export type UserProfileType = {
    aboutMe: string | null
    contacts: ContactsUserType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number,
    photos: PhotosUserType
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '9f5fc3ee-790f-410c-959d-2faeddcc9f8e'
    }
})

export const authAPI = {
    me: async (): Promise<ResponseType<AuthUserDataType>> => {
        const response = await instance.get(`auth/me`);
        return response.data;
    },
    logIn: async (email: string, password: string, rememberMe: boolean) => {
        const response = await instance.post<ResponseType<{ userId: number }>>(`auth/login`, {
            email,
            password,
            rememberMe
        });
        return response.data;
    },
    logOut: async () => {
        const response = await instance.delete<ResponseType>(`auth/login`);
        return response.data;
    }
}

export const profileAPI = {
    getUserProfile: async (id: number) => {
        const response = await instance.get<UserProfileType>(`profile/${id}`);
        return response.data;
    },
    changeFollowStatus: async (id: number, requestType: RequestType) => {
        const response = await instance[requestType]<ResponseType>(`follow/${id}`)
        return response.data;
    },
    getUserStatus: async (id: string) => {
        const response = await instance.get<string>(`profile/status/${id}`);
        return response.data;
    },
    updateUserStatus: async (status: string) => {
        const response = await instance.put<ResponseType>(`profile/status`, {status: status});
        return response.data;
    },
}

export const usersAPI = {
    getUsers: async (pageSize: number, currentPage: number) => {
        const response = await instance.get<GetUsersResponseType>(`users`, {
            params: {
                count: pageSize,
                page: currentPage
            }
        });
        return response.data;
    }
}

