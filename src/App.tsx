import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

export type postType = {
    id: number
    post: string
    likes: number
}

export type messageType = {
    id: number
    message: string
}

export type dialogType = {
    id: number
    name: string
    avatar: string
}

export type navElementType = {
    navElement: string
    to: string
}

type AppType = {
    state: {
        profilePage: {
            postData: Array<postType>
        }
        dialogsPage: {
            dialogsData: Array<dialogType>
            messagesData: Array<messageType>
        },
        navbar: Array<navElementType>
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
