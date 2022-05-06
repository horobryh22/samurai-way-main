import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {Action, Store} from 'redux';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ActionTypes, StateType} from '../../redux/store';


type ProfileType = {
    store: Store<StateType, ActionTypes>
}

export const Profile: React.FC<ProfileType> = ({store}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>
    );
}
