import React from 'react';
import classes from './Navbar.module.css';

console.log(classes);

function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>Profile</div>
            <div className={classes.item}>Massages</div>
            <div className={classes.item}>News</div>
            <div className={classes.item}>Music</div>
            <div className={classes.item}>Settings</div>
        </nav>
    );
}

export default Navbar;