import React from 'react';
import classes from './ProfileStatus.module.css';

type ProfileStatusPropsType = {
    status: string
}

type ProfileStatusStateType = {
    editMode: boolean
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {

    state = {
        editMode: false
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <div className={classes.statusWrapper}>
                {(!this.state.editMode)
                    ? <div onDoubleClick={this.toggleEditMode}>{this.props.status}</div>
                    : <input autoFocus onBlur={this.toggleEditMode} value={this.props.status}/>
                }
            </div>
        )
    }
}
