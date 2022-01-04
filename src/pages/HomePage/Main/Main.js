import React from 'react'
import s from './Main.module.scss';
import search from '../../../assets/icon/search.svg'
import citi from '../../../assets/icon/citi.svg'


export const Main = () => {
    return (
        <div className={s.main}>
            <h2 className={s.subtitle}>сайт по поиску работы №1</h2>
            <h1 className={s.title}>Please enter the vacancy and the city</h1>
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
