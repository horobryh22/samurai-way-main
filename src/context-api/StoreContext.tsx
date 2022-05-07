import React from 'react';
import {Store} from 'redux';
import {ActionTypes, StateType} from '../redux/store';

export const StoreContext = React.createContext<Store<StateType, ActionTypes> | null>(null);

type ProviderPropsType = {
    store: Store<StateType, ActionTypes>
}

export const Provider: React.FC<ProviderPropsType> = ({store, children}) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}