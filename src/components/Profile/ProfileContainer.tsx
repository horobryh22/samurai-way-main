import React from 'react';
import axios, {AxiosResponse} from 'axios';
import {ProfileActionsType, setUserProfileAC, UserProfileType} from '../../redux/reducers/profile/profile-reducer';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string,
}

export type ProfileContainerPropsType = MapStateToProps & MapDispatchToProps & RouteComponentProps<PathParamsType>;

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) userId = '2';

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response: AxiosResponse<UserProfileType>) => {
                this.props.setUserProfile(response.data);
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
