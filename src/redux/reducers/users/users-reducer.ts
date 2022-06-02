export type PhotosUserType = {
    small: null | string
    large: null | string
}

export type UsersTestType = {
    name: string
    id: number
    photos: PhotosUserType
    status: null | string
    followed: boolean
}

export type UsersPageType = {
    users: Array<UsersTestType>
    pageSize: number
    usersCount: number
    currentPage: number
    isFetching: boolean
    isChangingFollowStatus: Array<number>
}

export type UsersActionsType = ReturnType<typeof changeFollowed>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof changeCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleChangingFollowStatus>;

const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const CHANGE_FOLLOWED = 'CHANGE-FOLLOWED';
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_CHANGING_FOLLOW_STATUS = 'TOGGLE-CHANGING-FOLLOW-STATUS';

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    usersCount: 0,
    currentPage: 1,
    isFetching: false,
    isChangingFollowStatus: []
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionsType): UsersPageType => {
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

export const changeFollowed = (userId: number) => {
    return {
        type: CHANGE_FOLLOWED,
        payload: {
            userId
        }
    } as const
}

export const setUsers = (users: Array<UsersTestType>) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}

export const changeCurrentPage = (pageNumber: number) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        payload: {
            pageNumber
        }
    } as const
}

export const setTotalCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        payload: {
            totalCount
        }
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type : TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const
}

export const toggleChangingFollowStatus = (isChanging: boolean, id: number) => {
    return {
        type : TOGGLE_CHANGING_FOLLOW_STATUS,
        payload: {
            isChanging,
            id
        }
    } as const
}

