import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MapDispatchPropsType, MapStatePropsType} from './MyPostsContainer';
import TextFieldForm, {TextFormDataType} from '../../common/components/TextFieldForm/TextFieldForm';

type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;

export const MyPosts: React.FC<MyPostsPropsType> = ({profilePage, addPost}) => {

    const posts = profilePage.posts?.map(p => <Post key={p.id} post={p.post} likes={p.likes} id={p.id}/>);

    const onSubmitHandler = ({textField: message}:TextFormDataType) => {
        addPost(message);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <TextFieldForm onSubmit={onSubmitHandler}/>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}

