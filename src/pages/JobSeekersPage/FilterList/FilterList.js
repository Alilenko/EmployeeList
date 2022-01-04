import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import FilterPhoto from '../FilterPhoto/FilterPhoto'
import FilterSlice from '../FilterSlice/FilterSlice'
import FilterTab from '../FilterTab/FilterTab'
import s from './FilterList.module.scss'

const FilterList = () => {
    const [open, setOpen] = useState(false)
    const {filter} = useSelector(state => state.filter)

    const toggleClass = () => {
        setOpen(open => !open)
    
    }

    return (
        <>
            <div className={s.icon} onClick={toggleClass}>
                <div className='icon-filter'></div>
            </div>
        <div className={open ? 'filterList_active' :  'filterList' }>
            <div className={s.filterUL}>
            <div className={s.icon_close} onClick={toggleClass}>
                x
            </div>
            <FilterPhoto item={filter[5]}/>
            <FilterSlice item={filter[0]} />
            <FilterTab item={filter[6]}/>
            <FilterSlice item={filter[1]} />
            <FilterCheckbox item={filter[2]} />
            <FilterCheckbox item={filter[7]}/>
            <FilterCheckbox item={filter[3]}/>
            <FilterCheckbox item={filter[4]}/>
            </div>
        </div>
    </>
    )
}

export default FilterList
