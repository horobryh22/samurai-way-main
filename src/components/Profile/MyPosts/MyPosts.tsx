import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts() {
    return (
        <div className={classes.posts}>
            My post
            <div>
                New Posts
                <Post message = 'Tell me how are you friends?' likes={10}/>
                <Post message = 'Hello, it is my first post' likes={15}/>
            </div>
        </div>
    );
}

export default MyPosts;