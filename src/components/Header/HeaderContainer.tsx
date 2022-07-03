import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppDispatch, StateType} from '../../redux/redux-store';
import {logOutTC, setAuthUserTC} from '../../redux/reducers/auth-reducer/auth-reducer';

export type HeaderComponentPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;


class HeaderContainer extends React.Component<HeaderComponentPropsType> {

    componentDidMount() {
        this.props.me();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth,
        authUserProfile: state.auth.authUserProfile
    } as const
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        logOut: () => {
            dispatch(logOutTC());
        },
        me: () => {
            dispatch(setAuthUserTC());
        }
    } as const
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
