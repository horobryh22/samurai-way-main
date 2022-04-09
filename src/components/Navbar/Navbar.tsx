import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {navElementType} from '../../App';

type NavbarType = {
    state: Array<navElementType>
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
