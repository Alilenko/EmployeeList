import React from 'react';
import  Header from './pages/Header/Header';
import {Routes, Route} from 'react-router-dom'
import  HomePage  from './pages/HomePage/HomePage';
import JobSeekers from './pages/JobSeekersPage/JobSeekers'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/' element={<JobSeekers/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
