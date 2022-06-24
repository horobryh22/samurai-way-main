import {AppDispatch} from '../../redux-store';
import {profileAPI, usersAPI} from '../../../api/api';

export type PhotosUserType = {
    small: null | string
    large: null | string
}

export type UserDataType = {
    name: string
    id: number
    photos: PhotosUserType
    status: null | string
    followed: boolean
}

export type UsersType = {
    users: Array<UserDataType>
    pageSize: number
    usersCount: number
    currentPage: number
    isFetching: boolean
    isChangingFollowStatus: Array<number>
}

export type UsersActionsType = ReturnType<typeof changeFollowedAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof changeCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleChangingFollowStatusAC>;

const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const CHANGE_FOLLOWED = 'CHANGE-FOLLOWED';
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_CHANGING_FOLLOW_STATUS = 'TOGGLE-CHANGING-FOLLOW-STATUS';

const initialState: UsersType = {
    users: [],
    pageSize: 5,
    usersCount: 0,
    currentPage: 1,
    isFetching: false,
    isChangingFollowStatus: []
}

export const usersReducer = (state: UsersType = initialState, action: UsersActionsType): UsersType => {
    switch (action.type) {
        case CHANGE_FOLLOWED:
            const userId = action.payload.userId;
            return {
                ...state,
                users: state.users
                    .map(u => u.id === userId
                        ? {...u, followed: !(state.users.find(el => el.id === userId)?.followed)}
                        : u)
            }
        case SET_USERS:
            return {...state, users: [...action.payload.users]};
        case CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.payload.pageNumber}
        case SET_TOTAL_COUNT:
            return {...state, usersCount: action.payload.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload.isFetching}
        case TOGGLE_CHANGING_FOLLOW_STATUS:
            return {
                ...state,
                isChangingFollowStatus: action.payload.isChanging
                    ? [...state.isChangingFollowStatus, action.payload.id]
                    : state.isChangingFollowStatus.filter(id => id !== action.payload.id)
            }
        default:
            return state;
    }
}

export const changeFollowedAC = (userId: number) => {
    return {
        type: CHANGE_FOLLOWED,
        payload: {
            userId
        }
    } as const
}

export const setUsersAC = (users: Array<UserDataType>) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}

export const changeCurrentPageAC = (pageNumber: number) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        payload: {
            pageNumber
        }
    } as const
}

export const setTotalCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        payload: {
            totalCount
        }
    } as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const
}

export const toggleChangingFollowStatusAC = (isChanging: boolean, id: number) => {
    return {
        type: TOGGLE_CHANGING_FOLLOW_STATUS,
        payload: {
            isChanging,
            id
        }
    } as const
}

export const getUsersTC = (pageSize: number, currentPage: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(toggleIsFetchingAC(true));
        const usersData = await usersAPI.getUsers(pageSize, currentPage);
        dispatch(toggleIsFetchingAC(false));
        dispatch(setUsersAC(usersData.items));
        dispatch(setTotalCountAC(usersData.totalCount));
    } catch (e) {
        const err = e as Error;
        console.error('getUsers: ' + err.message);
    }

}

export const changeFollowStatusTC = (id: number, followedStatus: boolean) => async (dispatch: AppDispatch) => {
    try {
        dispatch(toggleChangingFollowStatusAC(true, id));
        if (!followedStatus) {
            const data = await profileAPI.changeFollowStatus(id, 'post');
            if (!data.resultCode) dispatch(changeFollowedAC(id));
        }

        if (followedStatus) {
            const data = await profileAPI.changeFollowStatus(id, 'delete');
            if (!data.resultCode) dispatch(changeFollowedAC(id));
        }

        dispatch(toggleChangingFollowStatusAC(false, id));
    } catch (e) {
        const err = e as Error;
        console.error('changeFollowStatus: ' + err.message);
    }
}

