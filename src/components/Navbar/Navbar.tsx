import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

export type NavbarType = {
    state: Array<NavElementType>
}

export type NavElementType = {
    navElement: string
    to: string
}

export function Navbar({state}: NavbarType) {
    return (
        <nav className={classes.nav}>
            {state.map((navElement) => (
                <div className={classes.item}>
                    <NavLink to={`${navElement.to}`} activeClassName={classes.active}>{navElement.navElement}</NavLink>
                </div>
            ))}
        </nav>
    );
}
