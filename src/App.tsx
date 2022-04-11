import React, {PropsWithChildren} from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {StateType} from './redux/state';

type AppType = {
    state: StateType
    addPost: (messagePost: string) => void
    changeValueTextarea: (value: string) => void
}

const App: React.FC<AppType> = ({state, addPost, changeValueTextarea}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={state.navbar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile addPost={addPost}
                                                                  profilePage={state.profilePage}
                                                                  changeValueTextarea={changeValueTextarea}/>}/> {/*заменили атрибут component на render, для того, чтобы можно было прокинуть props.*/}
                    <Route path="/dialogs" render={() => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
