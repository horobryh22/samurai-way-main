import React from 'react';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() =><DialogsContainer/>}/>
                    <Route path="/users" render={() =><UsersContainer/>}/>
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
