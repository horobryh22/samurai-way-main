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
import {ResponseDataType, userAuth, userProfile, UserProfileType} from '../../api/api';

export type HeaderComponentPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;


class HeaderContainer extends React.Component<HeaderComponentPropsType> {

    componentDidMount() {
        userAuth.becomeAuthUser()
            .then((data: ResponseDataType) => {
                if (!data.resultCode) {
                    this.props.setAuthUserData(data.data);
                    const id = data.data.id
                    userProfile.getUserProfile(id)
                        .then((data: UserProfileType) => {
                            this.props.setCurrentAuthUser(data);
                        })
                }
            })
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
