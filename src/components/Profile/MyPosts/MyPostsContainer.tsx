import React from 'react';
import {
    ProfileActionsType,
    addPostActionCreator,
    changeValuePostActionCreator
} from '../../../redux/reducers/profile/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/redux-store';


const mapStateToProps = (state: StateType) => {
    return {
        postData: state.profilePage.posts,
        textareaValue: state.profilePage.postText
    }
}

const mapDispatchToProps = (dispatch: (action: ProfileActionsType) => void) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        changeValuePost: (valuePost: string) => {
            dispatch(changeValuePostActionCreator(valuePost));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
