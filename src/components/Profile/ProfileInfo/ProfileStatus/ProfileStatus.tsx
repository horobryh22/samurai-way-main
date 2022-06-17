import React, {ChangeEvent} from 'react';
import classes from './ProfileStatus.module.css';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

type ProfileStatusStateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
        if (this.state.editMode) {
            debugger;
            this.props.updateUserStatus(this.state.status);
        }
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        this.setState({status: value});
    }

    render() {
        return (
            <div className={classes.statusWrapper}>
                {(!this.state.editMode)
                    ? <div onDoubleClick={this.toggleEditMode}>{this.props.status || 'No status'}</div>
                    : <input autoFocus onBlur={this.toggleEditMode} value={this.state.status} onChange={this.onChangeHandler}/>
                }
            </div>
        )
    }
}
