import React from 'react';
import classes from './Header.module.css';
import {HeaderComponentPropsType} from './HeaderContainer';
import avatar from '../../assets/images/default-avatar.jpeg'
import logo from '../../assets/images/logo.svg'
import {NavLink} from 'react-router-dom';

export type HeaderPropsType = HeaderComponentPropsType;

export const Header: React.FC<HeaderPropsType> = ({isAuth, logOut, authUserProfile}) => {

    return (
        <header className={classes.header}>
            <img
                src={logo}
                alt="logo"/>
            {isAuth
                ? <div className={classes.userDataBlock}>
                    <img src={authUserProfile.photos?.small ? authUserProfile.photos.small : avatar} alt=""/>
                    <div className={classes.userName}>{authUserProfile.fullName}</div>
                    <div className={classes.loginBlock}>
                        <NavLink to={'/login'} onClick={logOut}>LogOut</NavLink>
                    </div>
                </div>
                : <div className={classes.loginBlock}>
                    <NavLink to={'/login'}>LogIn</NavLink>
                </div>
            }
        </header>
    );
}
