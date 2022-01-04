import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveTab } from '../../app/filterSlice';
import  './Tab.scss';

const Tab = ({item}) => {
    const [activState, setActive] = useState('Любой')
    const {filter} = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const {name, active} = item;

   
    return (
        <button 
        onClick={(name) => setActive(state => name)} 
        className={active ? 'tab_active' : 'tab'}>
            {name}
        </button>
    )
}

export default Tab
