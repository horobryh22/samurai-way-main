export type UserLocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    fullName: string
    avatar: string
    location: UserLocationType
    status: string
    followed: boolean
}

export type UsersPageType = {
    users: Array<UserType>
}

export type UsersActionsType = ReturnType<typeof changeFollowedAC> | ReturnType<typeof setUsersAC>;

const CHANGE_FOLLOWED = 'CHANGE-FOLLOWED';
const SET_USERS = 'SET-USERS';

const initialState: UsersPageType = {
    users: []
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
            return {...state, users: [...state.users, ...action.payload.users]};
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

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}
