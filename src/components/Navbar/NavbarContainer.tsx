import React from 'react';
import {ActionTypes, StateType} from '../../redux/store';
import {connect} from 'react-redux';
import {Navbar} from './Navbar';


const mapStateToProps = (state: StateType) => {
    return {
        navbar: state.navbar
    }
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {

    }
}

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

