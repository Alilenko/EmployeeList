import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import leng from '../../assets/icon/leng.svg'
import arrow from '../../assets/icon/arrow.svg'
import mobile from '../../assets/icon/mobileArrow.svg'
import s from './Header.module.scss'

const Header = () => {
    return (
        <div className={s.header}>
            <div className='container'>
                <div className={s.wrapper}>
            <div className={s.header_left}>
                <NavLink style={({ isActive }) => ({ fontWeight: isActive ? '600' : '400' })} className={s.header_link} to='/employee'>Соискатель</NavLink>
                <NavLink style={({ isActive }) => ({ fontWeight: isActive ? '600' : '400' })} className={s.header_link} to='/'>Работодатель</NavLink>
                <NavLink style={({ isActive }) => ({ fontWeight: isActive ? '600' : '400' })} className={s.header_link} to='/hr'>HR</NavLink>
            </div>
            <div className={s.header_right}>
                <div className={s.header_leng}>
                    <img src={leng} alt='leng'/>
                    <span>RU</span>
                    <img src={arrow} alt='arrow'/>
                </div>
                <Link className={s.header_signin} to='#'>Войти</Link>
            </div>
            <Link className={s.mobile} to='#'>Соискателю
                    <img src={mobile} alt='mobile_arrow'/>                
                 </Link>
            </div>
            </div>
        </div>
    )
}

export default Header;
