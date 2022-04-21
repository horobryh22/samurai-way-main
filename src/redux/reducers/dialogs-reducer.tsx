import {ActionTypes, DialogsPageType} from '../state';
import React from 'react';


export const dialogsReducer = (state: DialogsPageType, action: ActionTypes): DialogsPageType => {

    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage = {
                id: 5,
                message: state.messageText
            }
            state.messages = [newMessage, ...state.messages];
            state.messageText = '';
            break;

        case 'CHANGE-VALUE-TEXTAREA-MESSAGE':
            state.messageText = action.valueMessage;
            break;
    }

    return state;
}

export const sendMessageActionCreator = () => ({type: 'SEND-MESSAGE'} as const);

export const changeValueMessageActionCreator = (valueMessage: string) =>
    ({type: 'CHANGE-VALUE-TEXTAREA-MESSAGE', valueMessage} as const);