import React from 'react';
import {connect} from 'react-redux';
import {Navbar} from './Navbar';
import {StateType} from '../../redux/redux-store';


const mapStateToProps = (state: StateType) => {
    return {
        navbar: state.navbar
    }
}
//
const mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {

    }
}

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

