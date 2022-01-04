import React from 'react'
import s from './Search.module.scss'
import search from '../../assets/icon/search.svg'
import citi from '../../assets/icon/citi.svg'

export const SearchPanel = () => {
    return (
        <div className={s.wrapper}>
        <form className={s.search}>
        <div className={s.position}>
            <img src={search} alt='search'/>
            <input  placeholder='На какую должность вы ищете кандидата?'/>
        </div>
        <div className={s.citi}>
            <img src={citi} alt='citi'/>
            <input  placeholder='Город'/>
        </div>
        <button className={s.btn} >Найти кандидатов</button>
    </form>
    </div>
    )
}
