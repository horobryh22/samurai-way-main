import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {Action, Store} from 'redux';
import {ActionTypes, StateType} from '../../redux/store';

export type NavbarPropsType = {
    store: Store<StateType, ActionTypes>
}

export const Navbar: React.FC<NavbarPropsType> = ({store}) => {

    const state = store.getState().navbar;

    return (
        <nav className={classes.nav}>
            {state.map((navElement, i) => (
                <div key={navElement.id} className={classes.item}>
                    <NavLink to={`${navElement.to}`} activeClassName={classes.active}>{navElement.navElement}</NavLink>
                </div>
            ))}
        </nav>
    );
}
