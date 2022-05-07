import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './redux/redux-store';
import {Provider} from './context-api/StoreContext';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>,
        </Provider>,
        document.getElementById('root')
    );
}

//store.addPost.bind(store) - означает, что мы нашему методу, принадлежащему объекту store, делаем четкую привязку к этому объекту с помощью метода bind и теперь всегда, когда мы будем вызывать этот объект даже без точки, он будет вызываться в контексте вызова нашего store.

store.subscribe(rerenderEntireTree)
rerenderEntireTree();

