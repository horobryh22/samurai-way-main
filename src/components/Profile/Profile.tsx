import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import axios, {AxiosResponse} from 'axios';
import {ProfileActionsType, setUserProfileAC, UserProfileType} from '../../redux/reducers/profile/profile-reducer';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';

export type ProfileContainerPropsType = MapStateToProps & MapDispatchToProps;

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response: AxiosResponse<UserProfileType>) => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <div>
                <ProfileInfo {...this.props}/>
                <MyPostsContainer/>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
