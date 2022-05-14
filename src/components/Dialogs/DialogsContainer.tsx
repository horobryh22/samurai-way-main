import React from 'react';
import {ActionTypes, StateType} from '../../redux/store';
import {changeValueMessageActionCreator, sendMessageActionCreator} from '../../redux/reducers/dialogs/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';

const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapStateToDispatch = (dispatch: (action: ActionTypes)=> void) => {
    return {
        sendMessage: () => dispatch(sendMessageActionCreator()),
        changeValueMessage: (valueMessage: string)=> dispatch(changeValueMessageActionCreator(valueMessage))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapStateToDispatch)(Dialogs);
