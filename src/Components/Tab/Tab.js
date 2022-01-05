import React from 'react'
import { useState } from 'react';

import  './Tab.scss';

const Tab = ({item}) => {
    const [activState, setActive] = useState('Любой')
 
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
