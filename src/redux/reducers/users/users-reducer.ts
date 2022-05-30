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
}

export type UsersActionsType = ReturnType<typeof changeFollowed>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof changeCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching>;

const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const CHANGE_FOLLOWED = 'CHANGE-FOLLOWED';
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    usersCount: 0,
    currentPage: 1,
    isFetching: false
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

