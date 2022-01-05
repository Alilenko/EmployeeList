import React from 'react'
import s from './FilterCheckboxInside.module.scss'
import { useState } from 'react'

const FilterCheckboxInside = (item) => {
    const [chek, setChek] = useState(false)

    const changeCheckbox = () => {
        setChek(!chek)
    }
 
    return (
    <>
        <div className={s.checkbox}>
        <div>
            <div className={chek ? 'active' : null} onClick={changeCheckbox}><div className= 'icon-checked'/></div>
            <input className={s.input} type="checkbox" id="scales" name="scales"  />
            <label className={s.label} htmlFor="scales" >{item.item.experience}</label >
        </div>
        <div className={s.num}>{item.item.qtty}</div>
        </div>
    </>
    )
}

export default FilterCheckboxInside;
