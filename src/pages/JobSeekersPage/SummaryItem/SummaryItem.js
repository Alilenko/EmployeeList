import React from 'react'
import s from './SummaryItem.module.scss';

const SummaryItem = ({item}) => {

    const {
        first_name,
        category,
        desiredposition,

    } = item

    return (
        <div className={s.summary}>
            <div className={s.logo}></div>
            <div className={s.deckr}>
                <div className={s.vacancy}>{category ? category : "Вакансия"}</div>
                    <div className={s.contact}>
                        <div className={s.name}>{first_name ? first_name : "Имя"}, 23 года</div>
                        <div className={s.city}><div className='icon-citi'></div>Kyiv, Ukraine</div>
                    </div>
                    {
                        desiredposition.map((item) => (
                            <div key={item.id} className={s.experience}>{item.position}</div>
                        ))
                    }
                    <div className={s.bottom}>
                        <div className={s.update}>Обновлено 9 минут назад</div>
                        <div className={s.online}>Онлайн</div>
                    </div>
                </div>
            <div className={s.info}>
                <div className='icon-like'></div>
                <div ><div className='icon-more_info'></div>
                    <ul className={s.list}>
                    <li className={s.list_item}>Пожаловаться</li>
                    <li className={s.list_item}>Скрыть кандидата</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SummaryItem
