import React, {ComponentType} from 'react';
import {getUserProfileTC, getUserStatusTC, updateUserStatusTC} from '../../redux/reducers/profile/profile-reducer';
import {connect} from 'react-redux';
import {AppDispatch, StateType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
    userId: string
}

export type ProfileContainerPropsType = MapStateToProps & MapDispatchToProps & RouteComponentProps<PathParamsType>;

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : '24040';
        this.props.getUserProfile(userId);

        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

type MapStateToProps = ReturnType<typeof mapStateToProps>
type MapDispatchToProps = ReturnType<typeof mapDispatchToProps>

export const mapStateToProps = (state: StateType) => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status
    } as const
};

export const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        getUserProfile: (userId: string) => {
            dispatch(getUserProfileTC(userId));
        },
        getUserStatus: (userId: string) => {
            dispatch(getUserStatusTC(userId));
        },
        updateUserStatus: (status: string) => {
            dispatch(updateUserStatusTC(status))
        }
    } as const
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileContainer) // нашу целевую компоненту Profile оборачиваем еще тремя HOC, чтобы расширить вомзонжости нашей презентационной компоненты
