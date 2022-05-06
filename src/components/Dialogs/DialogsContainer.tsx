import React from 'react';
import {ActionTypes, StateType} from '../../redux/store';
import {changeValueMessageActionCreator, sendMessageActionCreator} from '../../redux/reducers/dialogs-reducer';
import {Store} from 'redux';
import {Dialogs} from './Dialogs';

type DialogsContainerPropsType = {
    store: Store<StateType, ActionTypes>
}

export const DialogsContainer: React.FC<DialogsContainerPropsType> = ({store}) => {

    const state = store.getState().dialogsPage;

    const sendMessageHandler = (): void => {
        store.dispatch(sendMessageActionCreator())
    }

    const changeValueMessageHandler = (valueMessage: string): void => {
        store.dispatch(changeValueMessageActionCreator(valueMessage));
    }

    return (
        <Dialogs
            dialogsPage={state}
            sendMessage = {sendMessageHandler}
            changeValueMessage = {changeValueMessageHandler}
        />
    )
}
