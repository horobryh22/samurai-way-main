import React from 'react';
import {addPostActionCreator, changeValuePostActionCreator} from '../../../redux/reducers/profile/profile-reducer';
import {MyPosts} from './MyPosts';
import {ActionTypes, StateType} from '../../../redux/store';
import {connect} from 'react-redux';


const mapStateToProps = (state: StateType) => {
    return {
        postData: state.profilePage.posts,
        textareaValue: state.profilePage.postText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
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
