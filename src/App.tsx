import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {StoreContext} from './context-api/StoreContext'
import {DialogsContainer} from './components/Dialogs/DialogsContainer';



const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <StoreContext.Consumer>
                    {(store) => <Navbar store={store}/>}
                </StoreContext.Consumer>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile/>}/>
                    <Route path="/dialogs" render={() =>
                        <StoreContext.Consumer>
                            {(store) => <DialogsContainer store={store}/>}
                        </StoreContext.Consumer>}/>
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
