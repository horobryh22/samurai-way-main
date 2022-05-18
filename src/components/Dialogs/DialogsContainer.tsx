import React from 'react';
import {
    DialogsActionsType,
    changeValueMessageActionCreator,
    sendMessageActionCreator
} from '../../redux/reducers/dialogs/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';

const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapStateToDispatch = (dispatch: (action: DialogsActionsType)=> void) => {
    return {
        sendMessage: () => dispatch(sendMessageActionCreator()),
        changeValueMessage: (valueMessage: string)=> dispatch(changeValueMessageActionCreator(valueMessage))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapStateToDispatch)(Dialogs);
