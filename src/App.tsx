import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionTypes, StateType} from './redux/store';

type AppType = {
    state: StateType
    dispatch: (action: ActionTypes) => void
}

const App: React.FC<AppType> = ({state, dispatch}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={state.navbar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile dispatch={dispatch}
                                                                  profilePage={state.profilePage}
                    />}/> {/*заменили атрибут component на render, для того, чтобы можно было прокинуть props.*/}
                    <Route path="/dialogs"
                           render={() => <Dialogs dispatch={dispatch} dialogsPage={state.dialogsPage}/>}/>
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
