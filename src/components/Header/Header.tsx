import React from 'react';
import classes from './Header.module.css';
import {HeaderComponentPropsType} from './HeaderContainer';
import avatar from '../../assets/images/default-avatar.jpeg'
import {NavLink} from 'react-router-dom';

export type HeaderPropsType = HeaderComponentPropsType;

export const Header: React.FC<HeaderPropsType> = ({isAuth, currentAuthUser, logOut}) => {

    return (
        <header className={classes.header}>
            <img
                src="http://demo.foxthemes.net/socialitev2.2/assets/images/logo.png"
                alt="logo"/>
            {isAuth
                ? <div className={classes.userDataBlock}>
                    <img src={currentAuthUser.photos?.small ? currentAuthUser.photos.small : avatar} alt=""/>
                    <div className={classes.userName}>{currentAuthUser.fullName}</div>
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
