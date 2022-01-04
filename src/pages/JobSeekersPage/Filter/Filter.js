import React from 'react'
import s from './Filter.module.scss';

const Filter = ({title, children}) => {
    return (
        <div className={s.filter}>
            <div className={s.title}>{title}</div>
                {children}
        </div>
    )
}

export default Filter
