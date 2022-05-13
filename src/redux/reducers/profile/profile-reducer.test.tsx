import {ProfilePageType} from '../../store';
import React from 'react';
import {profileReducer} from './profile-reducer';


const ADD_POST = 'ADD-POST';
const CHANGE_VALUE_TEXTAREA_POST = 'CHANGE-VALUE-TEXTAREA-POST';

const valuePost = 'Hello world, I\'m glad to see you';

const initialState: ProfilePageType = {
    posts: [
        {id: 1, post: 'Tell me how are you friends?', likes: 10},
        {id: 2, post: 'Hello, it is my first posts', likes: 15}
    ],
    postText: ''
}


test('The valueTextarea should be changing and the post should be sending', () => {

    profileReducer(initialState, {type: CHANGE_VALUE_TEXTAREA_POST, valuePost});

    expect(initialState.postText).toBe(valuePost);

    profileReducer(initialState, {type: ADD_POST});

    expect(initialState.postText).toBe('');
    expect(initialState.posts.length).toBe(3);
    expect(initialState.posts[0].id).toBe(3);
    expect(initialState.posts[0].post).toBe(valuePost);
    expect(initialState.posts[0].likes).toBe(0);
})

test('Expect to get error, because I pass incorrect TYPE', () => {

   expect(() => {
       // @ts-ignore
       profileReducer(initialState, {type: 'INCORRECT TYPE'});
   }).toThrowError();

})
