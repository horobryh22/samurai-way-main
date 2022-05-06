import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import {Post, PostType} from './Post/Post';

type MyPostsPropsType = {
    postData: Array<PostType>
    textareaValue: string
    addPost: () => void
    changeValuePost: (valuePost: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({postData, textareaValue, addPost, changeValuePost}) => {

    const posts = postData.map(p => <Post key={p.id} post={p.post} likes={p.likes} id={p.id}/>);

    const onClickButtonHandler = (): void => {
        addPost();
    }

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        const valuePost = e.currentTarget.value;
        changeValuePost(valuePost);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onChangeTextareaHandler} value={textareaValue}/>
                <div>
                    <button onClick={onClickButtonHandler}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}
