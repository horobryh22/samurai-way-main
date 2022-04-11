import React, {LegacyRef} from 'react';
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

    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef();

    const onClickButtonHandler = (): void => {
        addPost(textareaValue);
    }

    const onChangeTextareaHandler = (): void => {
        if (newPostElement.current) {
            const value = newPostElement.current.value;
            changeValueTextareaPost(value);
        }
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onChangeTextareaHandler} ref={newPostElement} value={textareaValue}/>
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
