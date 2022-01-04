import React, {useEffect} from 'react'
import SummaryItem from '../SummaryItem/SummaryItem'
import s from './SummaryList.module.scss'
import { summaryLoaded, summaryLoading, summaryError, changeTotal, changeActivePage, changeTotalPage } from '../../../app/summarySlice';
import { useDispatch, useSelector } from 'react-redux'
import {useHttp} from '../../../app/service'
import PaginationItem from '../PaginationItem/PaginationItem';

const SummaryList = () => {
    const {summary, totalCount, totalPage, activePage} = useSelector(state => state.summary)
    const dispatch = useDispatch();
    const {request} = useHttp();



   useEffect(() => {
    
    dispatch(summaryLoading());
    request(`http://135.181.30.244:27007/api/summaries/?page=${activePage}`)
    .then(data => res(data))
    .catch(() => dispatch(summaryError()))
    const pageNumber = []
            if(activePage > 5) {
                for (let i = activePage-4; i <= activePage+5; i++) {
                    pageNumber.push(i)
                    if(i === totalCount) break
                }
            }
            else {
                for (let i = 1; i <= 10; i++) {
                    pageNumber.push(i)
                    if(i === totalCount) break
                }
            }
         
        dispatch(changeTotalPage(pageNumber))

   }, [activePage])

   const res = (data) => {
    dispatch(summaryLoaded(data.results))
    dispatch(changeTotal(data.total_count)) 
    }

   const changePage = (page) => {
    dispatch(changeActivePage(page))

   }

    return (
        <div className={s.summary}>
            <h3 className={s.text}>Мы подобрали <span>{totalCount}</span> резюме</h3>
            <div className={s.subtext}>Резюме продавец консультант во Всей Украине
            <div className={s.filter}>за все время<div className='icon-arrow'></div></div>
            </div>
            {
                summary.map((item) => (
                    <SummaryItem key={item.id} item={item}/>
                ))
            }
            <div className={s.pagination}>
                <div onClick={()=> dispatch(changeActivePage(+activePage - 1))} className='icon-arrow arrow_left'></div>
            {
                totalPage.map((item, index) => (
                    <PaginationItem num={item} key={index} changePage={changePage}/>
                ))
            }
                 <div onClick={()=> dispatch(changeActivePage(+activePage + 1))} className='icon-arrow arrow_right'></div>
            </div>
        </div>
    )
}

export default SummaryList
