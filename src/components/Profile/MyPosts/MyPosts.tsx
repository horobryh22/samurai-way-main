import React, {ChangeEvent, LegacyRef} from 'react';
import classes from './MyPosts.module.css';
import {Post, PostType} from './Post/Post';


type MyPostsPropsType = {
    postData: Array<PostType>
    addPost: (messagePost: string) => void
    changeValueTextareaPost: (value: string) => void
    textareaValue: string
}

export const MyPosts: React.FC<MyPostsPropsType> = ({postData, addPost, changeValueTextareaPost, textareaValue}) => {

    const posts = postData.map(p => <Post key={p.id} post={p.post} likes={p.likes} id={p.id}/>);

    const onClickButtonHandler = (): void => {
        addPost(textareaValue);
    }

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        const value = e.currentTarget.value;
        changeValueTextareaPost(value);

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
