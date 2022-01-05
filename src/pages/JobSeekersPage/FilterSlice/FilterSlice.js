import React, {useState} from 'react'
import Range from '../../../Components/Range/Range';
import s from './FilterSlice.module.scss';
import Filter from '../Filter/Filter';
import FilterSwitch from '../FilterSwitch/FilterSwitch';

const FilterSlice = ({item}) => {
    const [minValue, setMin]  = useState('')
    const [maxValue, setMax]  = useState('')
    const {title, min, max} = item;

    const changeMin = (e) => {
        setMin(state => e.target.value)
    }
    const changeMax = (e) => {
        setMax(state => e.target.value)
    }

    return (
        <div className={s.filter}>
            <Filter title={title}>
                <div className={s.line}>
                    <div className={s.item} >от</div>
                    <Range min={min} max={max}/>
                    <div className={s.item}>лет</div>
                </div>
                <div className={s.box}>
                    <div className={s.item}>от</div>
                    <input type='number' className={s.input} value={minValue} onChange={(e)=> changeMin(e)}/>
                    <div className={s.item}>до</div>
                    <input type='number' className={s.input} value={maxValue} onChange={(e)=> changeMax(e)}/>
                    <div className={s.item}>лет</div>
                </div>
                { item.switch ? <FilterSwitch data={item}/> : null}
            </Filter>
        </div>
    )
}

export default FilterSlice
