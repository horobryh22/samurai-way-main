import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {AppDispatch, RootState} from './redux/redux-store';
import ProfileContainer from './components/Profile/ProfileContainer';
import {initializeAppTC} from './redux/reducers/app-reducer/app-reducer';
import {Preloader} from './components/common/components/Preloader/Preloader';

type AppPropsType = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.isAppInitialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className="app-wrapper-content">
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                        {/*<Route path='/news' component={News}/>*/}
                        {/*<Route path='/music' component={Music}/>*/}
                        {/*<Route path='/settings' component={Settings}/>*/}
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        isAppInitialized: state.app.isAppInitialized
    } as const
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        initializeApp: () => {
            dispatch(initializeAppTC());
        }
    } as const
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
