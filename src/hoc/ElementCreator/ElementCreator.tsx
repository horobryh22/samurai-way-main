import React from 'react';
import classes from './ElementCreator.module.css'

export const ElementCreator = (Element: React.ElementType) => ({input, meta, ...restProps}: any) => { /// тип any так и останется??

    const elementClassName = `${classes.field} ${meta.touched && meta.error ? classes.error : ''}`;

    return (
        <div className={elementClassName}>
            <Element {...input} {...restProps}/>
            {meta.touched && meta.error && <div><span>{meta.error}</span></div>}
        </div>
    )
}