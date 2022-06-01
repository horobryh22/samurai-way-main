import React from 'react';
import {ProfileActionsType, setUserProfileAC} from '../../redux/reducers/profile/profile-reducer';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {userProfile, UserProfileType} from '../../api/api';

type PathParamsType = {
    userId: string,
}

export type ProfileContainerPropsType = MapStateToProps & MapDispatchToProps & RouteComponentProps<PathParamsType>;

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = '24040';
        }

        userProfile.getUserProfile(Number(userId))
            .then((data: UserProfileType) => {
                this.props.setUserProfile(data);
            })
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
        userProfile: state.profilePage.userProfile
    } as const
};

export const mapDispatchToProps = (dispatch: (action: ProfileActionsType) => void) => {
    return {
        setUserProfile: (profile: UserProfileType) => {
            dispatch(setUserProfileAC(profile));
        }
    } as const
}

const ProfileComponentWithURLParams = withRouter(ProfileContainer);  //обернули нашу компоненту еще одной контейнерной компонентой, чтобы можно было получить параметры из URL адреса

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponentWithURLParams);
