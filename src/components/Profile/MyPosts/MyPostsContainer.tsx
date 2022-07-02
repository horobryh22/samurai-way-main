import React from 'react';
import {
    ProfileActionsType,
    addPostAC,
    ProfilePageType
} from '../../../redux/reducers/profile/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/redux-store';

export type MapStatePropsType = {
    profilePage: ProfilePageType
}

export type MapDispatchPropsType = {
    addPost: (message: string) => void
}


const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: (action: ProfileActionsType) => void): MapDispatchPropsType => {
    return {
        addPost: (message: string) => {
            dispatch(addPostAC(message));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
