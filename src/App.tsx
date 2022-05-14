import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {StoreContext} from './context-api/StoreContext'
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';



const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile/>}/>
                    <Route path="/dialogs" render={() =><DialogsContainer/>}/>
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
