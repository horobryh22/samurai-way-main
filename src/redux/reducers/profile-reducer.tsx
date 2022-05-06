import {ActionTypes, ProfilePageType} from '../store';
import React from 'react';

const APP_POST = 'ADD-POST';
const CHANGE_VALUE_TEXTAREA_POST = 'CHANGE-VALUE-TEXTAREA-POST';

const initialState: ProfilePageType = {
    posts: [
        {id: 1, post: 'Tell me how are you friends?', likes: 10},
        {id: 2, post: 'Hello, it is my first posts', likes: 15}
    ],
    postText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case APP_POST:
            const newPost = {
                id: 3,
                post: state.postText,
                likes: 0
            }
            state.postText = '';
            state.posts = [newPost, ...state.posts];
            break;

        case CHANGE_VALUE_TEXTAREA_POST:
            state.postText = action.valuePost;
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({type: APP_POST} as const);

export const changeValuePostActionCreator = (valuePost: string) =>
    ({type: CHANGE_VALUE_TEXTAREA_POST, valuePost} as const);
