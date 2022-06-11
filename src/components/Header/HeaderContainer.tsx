import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppDispatch, StateType} from '../../redux/redux-store';
import {getCurrentAuthUserProfileTC} from '../../redux/reducers/auth-reducer/auth-reducer';

export type HeaderComponentPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;


class HeaderContainer extends React.Component<HeaderComponentPropsType> {

    componentDidMount() {
        this.props.getCurrentAuthUserProfile();
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
        currentAuthUser: state.auth.currentAuthUser
    } as const
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        getCurrentAuthUserProfile: () => {
            dispatch(getCurrentAuthUserProfileTC());
        }
    } as const
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
