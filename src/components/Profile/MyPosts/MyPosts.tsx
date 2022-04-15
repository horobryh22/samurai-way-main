import React, {ChangeEvent, LegacyRef} from 'react';
import classes from './MyPosts.module.css';
import {Post, PostType} from './Post/Post';
import {ActionType} from '../../../redux/state';


type MyPostsPropsType = {
    postData: Array<PostType>
    dispatch: (action: ActionType) => void
    textareaValue: string
}

export const MyPosts: React.FC<MyPostsPropsType> = ({postData, dispatch, textareaValue}) => {

    const posts = postData.map(p => <Post key={p.id} post={p.post} likes={p.likes} id={p.id}/>);

    const onClickButtonHandler = (): void => {
        dispatch({type: 'ADD-POST', messagePost: textareaValue});
    }

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        const valuePost = e.currentTarget.value;
        dispatch({type: 'CHANGE-VALUE-TEXTAREA-POST', valuePost});
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
