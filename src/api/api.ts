import axios from 'axios';
import {PhotosUserType, UsersTestType} from '../redux/reducers/users/users-reducer';
import {AuthUserDataType} from '../redux/reducers/auth-reducer/auth-reducer';
import {ContactsUserType} from '../redux/reducers/profile/profile-reducer';

export type DataType = {
    error: null | string
    items: Array<UsersTestType>
    totalCount: number
}

export type ResponseDataType = {
    data: AuthUserDataType
    fieldsErrors: Array<any>
    messages: Array<any>
    resultCode: number
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

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd73ac9ac-03b0-4f3d-b9fd-ef31da93967f'
    }
})

export const users = {
    getUsers: async (pageSize: number, currentPage: number): Promise<DataType> => {
        const response = await instance.get(`users`, {
            params: {
                count: pageSize,
                page: currentPage
            }
        });
        return response.data;
    }
}

export const userProfile = {
    getUserProfile: async (id: number): Promise<UserProfileType> => {
        const response = await instance.get(`profile/${id}`);
        return response.data;
    }
}

export const userAuth = {
    becomeAuthUser: async (): Promise<ResponseDataType> => {
        const response = await instance.get(`auth/me`);
        return response.data;
    }
}


export const followStatus = {
    addUserToFriends: async (id: number): Promise<ResponseDataType> => {
        const response = await instance.post(`/follow/${id}`);
        return response.data;
    },
    removeUserFromFriends: async (id: number): Promise<ResponseDataType> => {
        const response = await instance.delete(`/follow/${id}`)
        return response.data;
    }
}

