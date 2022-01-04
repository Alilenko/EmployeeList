import React from 'react'
import FilterSwitch from '../FilterSwitch/FilterSwitch'
import s from './FilterPhoto.module.scss'

const FilterPhoto = ({item}) => {

    return (
        <div className={s.filter}>
            <FilterSwitch data={item}/>
        </div>
    )
}

export default FilterPhoto
