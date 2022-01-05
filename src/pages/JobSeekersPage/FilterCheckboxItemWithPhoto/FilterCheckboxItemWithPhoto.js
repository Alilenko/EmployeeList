import React from 'react'
import s from './FilterCheckboxItemWithPhoto.module.scss'

import { useState } from 'react'
import FilterCheckboxInside from '../FilterCheckboxInside/FilterCheckboxInside'

const FilterCheckboxItem = (item) => {
    const [chek, setChek] = useState(false)
    const [open, setOpen] = useState(false)

    const changeCheckbox = () => {
        setChek(!chek)
    }
    const arr = item.item.items

    const toggleList = () => {
        setOpen(open => !open)
    }
   

    return (
        <>
        <div className={s.checkbox}>
        <div>
            <div className={chek ? 'active' : null} onClick={changeCheckbox}><div className= 'icon-checked'/></div>
            <input className={s.input} type="checkbox" id="scales" name="scales"  />
               <img className={s.img} src={item.item.photo} alt='leng'/> 
            <label className={s.label} htmlFor="scales" >{item.item.experience}</label >
        </div>
        <div className={s.num}>{item.item.qtty}
        <div onClick={toggleList} className='icon-arrow'></div>
        </div>
        </div>
        { arr && open ? 
            arr.map((el) => (
                <FilterCheckboxInside item={el} key={el.experience}/>
            ))
        : null
        }
        
    </>
    )
}

export default FilterCheckboxItem
