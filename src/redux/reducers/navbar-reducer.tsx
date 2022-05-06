import {ActionTypes, NavbarType} from '../store';
import React from 'react';

const initialState: NavbarType = [
    {navElement: 'Profile', to: '/profile', id: 1},
    {navElement: 'Messages', to: '/dialogs', id: 2},
    {navElement: 'News', to: '/news', id: 3},
    {navElement: 'Music', to: '/music', id: 4},
    {navElement: 'Friends', to: '/friends', id: 5},
    {navElement: 'Settings', to: '/settings', id: 6},
]

export const navbarReducer = (state: NavbarType = initialState, action: ActionTypes): NavbarType => {
    return state;
}