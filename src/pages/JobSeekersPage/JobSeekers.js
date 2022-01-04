import React from 'react'
import Slider from '../../Components/Range/Range'
import { SearchPanel } from '../../Components/SearchPanel/SearchPanel'
import FilterList from './FilterList/FilterList'
import SummaryList from './SummaryList/SummaryList'

const JobSeekers = () => {
    return (
        <div >
            <SearchPanel/>
            <div className='job_seekers container'>
                
                <SummaryList/>
                <FilterList/>
            </div>
            
        </div>
    )
}

export default JobSeekers
