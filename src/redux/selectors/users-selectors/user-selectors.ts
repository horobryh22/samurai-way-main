import {RootState} from '../../redux-store';
import {createSelector} from 'reselect';

export const getUsers = (state: RootState) => state.usersPage.users
export const getPageSize = (state: RootState) => state.usersPage.pageSize;
export const getUsersCount = (state: RootState) => state.usersPage.usersCount;
export const getCurrentPage = (state: RootState) => state.usersPage.currentPage;
export const getIsFetching = (state: RootState) => state.usersPage.isFetching;
export const getIsChangingFollowStatus = (state: RootState) => state.usersPage.isChangingFollowStatus;

export const selectUsers = createSelector(
    getUsers,
    (users) => users.filter(u => true)
)