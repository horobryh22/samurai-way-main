import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MapDispatchPropsType, MapStatePropsType} from './MyPostsContainer';
import TextFieldForm, {TextFormDataType} from '../../common/components/TextFieldForm/TextFieldForm';
import {maxLengthCreator} from '../../../utilities/validation/validation';
import {ElementCreator} from '../../../hoc/ElementCreator/ElementCreator';

type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;

const maxLength = maxLengthCreator(5);
const Textarea = ElementCreator('textarea');

export const MyPosts: React.FC<MyPostsPropsType> = ({profilePage, addPost}) => {

    const posts = profilePage.posts?.map(p => <Post key={p.id} post={p.post} likes={p.likes} id={p.id}/>);

    const onSubmitHandler = ({textField: message}:TextFormDataType) => {
        addPost(message);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <TextFieldForm
                name={'Add post'}
                onSubmit={onSubmitHandler}
                maxLength={maxLength}
                component={Textarea}
            />
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}

