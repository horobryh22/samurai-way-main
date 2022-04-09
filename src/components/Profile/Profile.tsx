import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from './MyPosts/Post/Post';


type ProfileType = {
    state: {
        posts: Array<PostType>
    }
}

export function Profile({state}: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={state.posts}/>
        </div>
    );
}
