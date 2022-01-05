import React from 'react'
import s from './FilterCheckbox.module.scss';
import Filter from '../Filter/Filter';
import { useState} from 'react'
import FilterCheckboxItem from '../FilterCheckboxItem/FilterCheckboxItem';
import FilterCheckboxItemWithPhoto from '../FilterCheckboxItemWithPhoto/FilterCheckboxItemWithPhoto'
import FilterSwitch from '../FilterSwitch/FilterSwitch';

const FilterCheckbox = ({item}) => {

    const {title, items} = item;
    return (
        <div>
            <Filter title={title}>
            {   
                items.map((item) => (item.photo ?
                    <FilterCheckboxItemWithPhoto item={item} key={item.experience}/> :
                     <FilterCheckboxItem item={item} key={item.experience}/> )) 
            }
                { item.switch ? <FilterSwitch data={item}/>  : null}   
            </Filter>
        </div>
    )
}

export default FilterCheckbox
