import React from 'react'
import { useSelector } from 'react-redux';
import './PaginationItem.scss';

const PaginationItem = ({num, changePage}) => {
    const { activePage} = useSelector(state => state.summary)

    return (
        <div 
            onClick={()=> changePage(num)} 
            className={activePage === num ? 'pagination__item_active' :'pagination__item'}>
                {num}
        </div>
    )
}

export default PaginationItem
