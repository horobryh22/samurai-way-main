import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {NavbarType} from '../../redux/store';

export type NavbarPropsType = {
    navbar: NavbarType
}

export const Navbar: React.FC<NavbarPropsType> = ({navbar}) => {

    return (
        <nav className={classes.nav}>
            {navbar.map((navElement, i) => (
                <div key={navElement.id} className={classes.item}>
                    <NavLink to={`${navElement.to}`} activeClassName={classes.active}>{navElement.navElement}</NavLink>
                </div>
            ))}
        </nav>
    );
}


