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
    getUsers: (pageSize: number, currentPage: number): Promise<DataType> => {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data);
    }
}

export const userProfile = {
    getUserProfile: (id: number): Promise<UserProfileType> => {
        return instance.get(`profile/${id}`).then(response => response.data);
    }
}

export const userAuth = {
    becomeAuthUser: (): Promise<ResponseDataType> => {
        return instance.get(`auth/me`).then(response => response.data);
    }
}


export const followStatus = {
    addUserToFriends: (id: number): Promise<ResponseDataType> => {
        return instance.post(`/follow/${id}`).then(response => response.data);
    },
    removeUserFromFriends: (id: number): Promise<ResponseDataType> => {
        return instance.delete(`/follow/${id}`).then(response => response.data);
    }
}

