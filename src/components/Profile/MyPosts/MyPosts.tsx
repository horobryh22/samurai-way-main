import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {postType} from '../../../App';


type MyPostsType = {
    postData: Array<postType>
}

export function MyPosts({postData}: MyPostsType) {

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postData.map(p => <Post message={p.post} likes={p.likes}/>)}
            </div>
        </div>
    );
}
