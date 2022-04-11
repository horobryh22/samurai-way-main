import ReactDOM from 'react-dom';
import App from './App';
import {addPost, changeValueTextarea, StateType} from './redux/state';
import React from 'react';


export const rerenderEntireTree = (state: StateType): void => {
    ReactDOM.render(
        <App state={state} addPost={addPost} changeValueTextarea={changeValueTextarea}/>,
        document.getElementById('root')
    );
}