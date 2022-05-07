import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {StoreContext} from '../../context-api/StoreContext';
import {Navbar} from '../Navbar/Navbar';


export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <StoreContext.Consumer>
                {(store) => <MyPostsContainer store={store}/>}
            </StoreContext.Consumer>
        </div>
    );
}
