import React, {ChangeEvent, useEffect, useState} from 'react';
import classes from './ProfileStatus.module.css';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}


export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = ({status: userStatus, updateUserStatus}) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(userStatus);

    const toggleEditMode = () => {
        setEditMode(!editMode);
        if (editMode) {
            updateUserStatus(status);
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setStatus(value);
    }

    useEffect(() => {
        setStatus(userStatus);
    }, [userStatus])

    return (
        <div className={classes.statusWrapper}>
            {(!editMode)
                ? <div
                    onDoubleClick={toggleEditMode}>{status || 'No status'}</div>
                : <input autoFocus onBlur={toggleEditMode} value={status}
                         onChange={onChangeHandler}/>
            }
        </div>
    )

}
