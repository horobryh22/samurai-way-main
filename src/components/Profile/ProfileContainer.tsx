import React from 'react';
import {getUserProfileTC} from '../../redux/reducers/profile/profile-reducer';
import {connect} from 'react-redux';
import {AppDispatch, StateType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type PathParamsType = {
    userId: string,
}

export type ProfileContainerPropsType = MapStateToProps & MapDispatchToProps & RouteComponentProps<PathParamsType>;

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : '24040';
        this.props.getUserProfile(userId);
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
    } as const
};

export const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        getUserProfile: (userId: string) => {
            dispatch(getUserProfileTC(userId));
        }
    } as const
}

const ProfileComponentWithURLParams = withRouter(ProfileContainer);  //обернули нашу компоненту еще одной контейнерной компонентой, чтобы можно было получить параметры из URL адреса

const ProfileWithAuthRedirect = withAuthRedirect(ProfileComponentWithURLParams);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWithAuthRedirect);
