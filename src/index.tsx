import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const postData = [
    {id: 1, post: 'Tell me how are you friends?', likes: 10},
    {id: 2, post: 'Hello, it is my first post', likes: 15}
];

const dialogsData = [
    {id: 1, name: 'Ilya'},
    {id: 2, name: 'Ivan'},
    {id: 3, name: 'Nasty'},
    {id: 4, name: 'Petr'},
    {id: 5, name: 'Natasha'},
    {id: 6, name: 'Oly'},
]

const messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Nice to meet you'},
    {id: 4, message: 'Where are you from?'}
]



ReactDOM.render(
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>,
  document.getElementById('root')
);