import  Tab  from '../../../Components/Tab/Tab';
import React from 'react'
import Filter from '../Filter/Filter';
import s from './FilterTab.module.scss';

const FilterTab = ({item}) => {
    const {title, tab} = item;

    return (
        <div>
            <Filter  title={title}>
            <div className={s.tab}>
            {
                tab.map((item) => (
                    <Tab item={item} key={item}/>
                ))
            }
            </div>
            </Filter>
        </div>
    )
}

export default FilterTab
