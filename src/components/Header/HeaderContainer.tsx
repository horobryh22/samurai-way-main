import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {UserProfileType} from '../../redux/reducers/profile/profile-reducer';
import {
    AuthActionsType,
    AuthUserDataType,
    setAuthUserDataAC,
    setCurrentAuthUserAC
} from '../../redux/reducers/auth-reducer/auth-reducer';
import axios, {AxiosResponse} from 'axios';

export type HeaderComponentPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
export type ResponseDataType = {
    data: AuthUserDataType
    fieldsErrors: Array<any>
    messages: Array<any>
    resultCode: number
}

class HeaderContainer extends React.Component<HeaderComponentPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((response: AxiosResponse<ResponseDataType>) => {
                if (!response.data.resultCode) {
                    this.props.setAuthUserData(response.data.data);
                    const id = response.data.data.id
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`, {withCredentials: true})
                        .then((response: AxiosResponse<UserProfileType>) => {
                            this.props.setCurrentAuthUser(response.data);
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
