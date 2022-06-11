import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {
    AuthActionsType,
    AuthUserDataType,
    setAuthUserDataAC,
    setCurrentAuthUserAC
} from '../../redux/reducers/auth-reducer/auth-reducer';
import {userAuth, userProfile, UserProfileType} from '../../api/api';

export type HeaderComponentPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;


class HeaderContainer extends React.Component<HeaderComponentPropsType> {

    async componentDidMount() {
        try {
            const data = await userAuth.becomeAuthUser();
            this.props.setAuthUserData(data.data);
            const profile = await userProfile.getUserProfile(data.data.id);
            this.props.setCurrentAuthUser(profile);
        } catch (e) {
            const err = e as Error;
            console.error('HeaderContainer: ' + err.message);
        }
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

const mapDispatchToProps = (dispatch: (action: AuthActionsType) => void) => {
    return {
        setAuthUserData: (data: AuthUserDataType) => {
            dispatch(setAuthUserDataAC(data));
        },
        setCurrentAuthUser: (data: UserProfileType) => {
            dispatch(setCurrentAuthUserAC(data));
        }
    } as const
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
