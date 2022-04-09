import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar, NavElementType} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {MessageType} from './components/Dialogs/Message/Message';
import {PostType} from './components/Profile/MyPosts/Post/Post';
import {DialogItemType} from './components/Dialogs/DialogItem/DialogItem';

type AppType = {
    state: {
        profilePage: {
            posts: Array<PostType>
        }
        dialogsPage: {
            dialogs: Array<DialogItemType>
            messages: Array<MessageType>
        },
        navbar: Array<NavElementType>
    }
}

function App({state}: AppType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={state.navbar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                        state={state.profilePage}/>}/> {/*заменили атрибут component на render, для того, чтобы можно было прокинуть props.*/}
                    <Route path="/dialogs" render={() => <Dialogs state={state.dialogsPage}/>}/>
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
