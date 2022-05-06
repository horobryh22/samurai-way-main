import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import type {Store} from 'redux';
import {ActionTypes, StateType} from './redux/store';
import {Action} from 'redux';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';


type AppType = {
    store: Store<StateType, ActionTypes>
}

const App: React.FC<AppType> = ({store}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar store={store}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile store={store}/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer store={store}/>}/>
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
