import React, {ComponentType} from 'react';
import {
    changeValueMessageAC,
    DialogsActionsType, DialogsPageType,
    sendMessageAC
} from '../../redux/reducers/dialogs/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


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

export default compose<ComponentType>(
    connect(mapStateToProps, mapStateToDispatch),
    withAuthRedirect
)(Dialogs)
