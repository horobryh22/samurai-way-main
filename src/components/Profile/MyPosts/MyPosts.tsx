import React, {ChangeEvent, LegacyRef} from 'react';
import classes from './MyPosts.module.css';
import {Post, PostType} from './Post/Post';


type MyPostsType = {
    postData: Array<PostType>
}

export function MyPosts({postData}: MyPostsType) {

    const posts = postData.map(p => <Post post={p.post} likes={p.likes} id={p.id}/>);

    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef();

    const addPost: () => void = () => {
        // @ts-ignore
        const textareaValue = newPostElement.current.value;
        console.log(textareaValue);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}
