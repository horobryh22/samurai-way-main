import React from 'react';
import {addPostActionCreator, changeValuePostActionCreator} from '../../../redux/reducers/profile-reducer';
import {Action, Store} from 'redux';
import {MyPosts} from './MyPosts';
import {ActionTypes, StateType} from '../../../redux/store';

type MyPostsContainerPropsType = {
    store: Store<StateType, ActionTypes> | null
}

export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = ({store}) => {
    const state  = store?.getState();
    if (state) {
        const addPostHandler = (): void => {
            store?.dispatch(addPostActionCreator());
        }

        const changeValuePostHandler = (valuePost: string): void => {
            store?.dispatch(changeValuePostActionCreator(valuePost));
        }

        return (
            <MyPosts
                addPost={addPostHandler}
                postData={state.profilePage.posts}
                changeValuePost = {changeValuePostHandler}
                textareaValue={state.profilePage.postText}
            />
        )
    } else {
        return <></>
    }
}
