import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './redux/state';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

//store.addPost.bind(store) - означает, что мы нашему методу, принадлежащему объекту store, делаем четкую привязку к этому объекту с помощью метода bind и теперь всегда, когда мы будем вызывать этот объект даже без точки, он будет вызываться в контексте вызова нашего store.

store.subscriber(rerenderEntireTree);
rerenderEntireTree();

