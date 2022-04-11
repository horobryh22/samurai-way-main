import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

export type NavbarType = {
    state: Array<NavElementType>
}

export type NavElementType = {
    id: number
    navElement: string
    to: string
}

export const Navbar: React.FC<NavbarType> = ({state}) => {
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
