import {
    changeCurrentPageAC,
    changeFollowedAC,
    setTotalCountAC,
    setUsersAC, toggleChangingFollowStatusAC,
    toggleIsFetchingAC,
    UsersType,
    usersReducer
} from './users-reducer';


let initialState: UsersType

beforeEach(() => {

    initialState = {
        users: [
            {
                name: 'Ilya Khorobrykh',
                id: 1,
                photos: {
                    small: null,
                    large: null
                },
                status: 'Hello everyone',
                followed: false
            },
            {
                name: 'Viktor',
                id: 2,
                photos: {
                    small: null,
                    large: null
                },
                status: 'Hi there',
                followed: false
            }
        ],
        pageSize: 5,
        usersCount: 0,
        currentPage: 1,
        isFetching: false,
        isChangingFollowStatus: []
    }

})


test('The property followed from users should be changed', () => {

    const newState = usersReducer(initialState, changeFollowedAC(1));

    expect(newState.users[0].followed).toBe(true);
    expect(newState.users[1].followed).toBe(false);

})

test('New users should be added inside initialState.users', () => {

    const newUsers = [
        {
            name: 'Kiryll',
            id: 3,
            photos: {
                small: null,
                large: null
            },
            status: 'Hi, I am here',
            followed: true
        }
    ]

    const newState = usersReducer(initialState, setUsersAC(newUsers));

    expect(newState.users.length).toBe(1);
    expect(newState.users[0]).toEqual({
        name: 'Kiryll',
        id: 3,
        photos: {
            small: null,
            large: null
        },
        status: 'Hi, I am here',
        followed: true
    });
})

test('If users from Initial State are empty, new Users also should be added', () => {

    initialState.users = [];

    const users = [
        {
            name: 'Kiryll',
            id: 3,
            photos: {
                small: null,
                large: null
            },
            status: 'Hi, I am here',
            followed: true
        }
    ]

    const newState = usersReducer(initialState, setUsersAC(users));

    expect(newState.users.length).toBe(1);
    expect(newState.users[0]).toEqual(users[0]);
})

test('current page should be change', () => {

    const newState = usersReducer(initialState, changeCurrentPageAC(10));

    expect(newState.currentPage).toBe(10);
})

test ('Total count of users should be added to state', () => {

    const newState = usersReducer(initialState, setTotalCountAC(100000));

    expect(newState.usersCount).toBe(100000);

})

test ('Property "isFetching" should be changed on changing state of request to server', () => {

    const newState = usersReducer(initialState, toggleIsFetchingAC(true));

    expect(newState.isFetching).toBe(true);

})

test ('Property "isChangingFollowStatus" should be changing on changing state of request to server', () => {

    const stateFirst = usersReducer(initialState, toggleChangingFollowStatusAC(true, 1));
    const stateSecond = usersReducer(stateFirst, toggleChangingFollowStatusAC(true, 2));

    expect(stateSecond.isChangingFollowStatus.length).toBe(2);
    expect(stateSecond.isChangingFollowStatus).toEqual([1, 2]);

    const stateThird = usersReducer(stateSecond, toggleChangingFollowStatusAC(false, 1));

    expect(stateThird.isChangingFollowStatus.length).toBe(1);
    expect(stateThird.isChangingFollowStatus).toEqual([2]);
})

