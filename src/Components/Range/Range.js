import React from 'react'
import './Range.css'
import { Slider } from '@material-ui/core';
import { useState } from 'react';



const Range = (item) => {
    const {min, max} = item;
    const [value, setValue] = useState([ min, max])
   

    const changeRange = (e, data) => {
        setValue(data)
    }

    return (
        <div className='slider_body'>
            <Slider
            value={value}
            onChange={changeRange}
            size="media"
            valueLabelDisplay='auto'
            min={min}
            max={max}
            style={{color: '#851FFF', width: '200px'}}
            />
        </div>
    )

}

export default Range
