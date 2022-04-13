import React from 'react';
import './index.css';
import {state, subscriber} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, changeValueTextareaMessage, changeValueTextareaPost, sendMessage, StateType} from './redux/state';

export const rerenderEntireTree = (state: StateType): void => {
    ReactDOM.render(
        <App state={state} addPost={addPost} changeValueTextareaMessage={changeValueTextareaMessage}
             changeValueTextareaPost={changeValueTextareaPost} sendMessage={sendMessage}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);
subscriber(rerenderEntireTree);
