import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {StateType} from '../redux/redux-store';

type RedirectComponentPropsType = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth
    } as const
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent: React.FC<RedirectComponentPropsType> = ({isAuth, ...restProps}) => {
        return (!isAuth) ? <Redirect to={'/login'}/> : <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent);
}
