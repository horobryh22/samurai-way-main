import {ActionTypes, ProfilePageType} from '../state';
import React from 'react';

export const profileReducer = (state: ProfilePageType, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: 3,
                post: state.postText,
                likes: 0
            }
            state.postText = '';
            state.posts = [newPost, ...state.posts];
            break;

        case 'CHANGE-VALUE-TEXTAREA-POST':
            state.postText = action.valuePost;
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const);

export const changeValuePostActionCreator = (valuePost: string) =>
    ({type: 'CHANGE-VALUE-TEXTAREA-POST', valuePost} as const);