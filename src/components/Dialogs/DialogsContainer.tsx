import React from 'react';
import {
    changeValueMessageAC,
    DialogsActionsType, DialogsPageType,
    sendMessageAC
} from '../../redux/reducers/dialogs/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


export type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

export type MapDispatchPropsType = {
    sendMessage: () => void
    changeValueMessage: (valueMessage: string) => void
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapStateToDispatch = (dispatch: (action: DialogsActionsType) => void): MapDispatchPropsType => {
    return {
        sendMessage: () => dispatch(sendMessageAC()),
        changeValueMessage: (valueMessage: string) => dispatch(changeValueMessageAC(valueMessage))
    }
}

const DialogsWithAuthRedirect = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(mapStateToProps, mapStateToDispatch)(DialogsWithAuthRedirect);
