import React from 'react'
import './FilterSwitch.scss'

const FilterSwitch = ({data}) => {
    console.log(data);
  
    return (
        <div className='filter_switch'>
            <div className='filter_switch_text'>
                {data.switch[0].photo ? <img src={data.switch[0].photo} alt='switch'/> : null}
                {data.switch[0].text}</div>
            <label className='switch'>
                <input type="checkbox"/>
                <span className='slider round'></span>
            </label>
        </div>
    )
}

export default FilterSwitch
