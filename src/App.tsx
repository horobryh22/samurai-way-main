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
}

type AppType = {
    postData: Array<postType>
    dialogsData: Array<dialogType>
    messagesData: Array<messageType>
}

function App({postData, dialogsData, messagesData}: AppType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                    <Route path="/profile" render={() => <Profile
                        postData={postData}/>}/> {/*заменили атрибут component на render, для того, чтобы можно было прокинуть props.*/}
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
