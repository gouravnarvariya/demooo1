import React from 'react'
import AdminHeading from './sub-component/AdminHeading'
import Chart from './sub-component/Chart'
import FolderList from './Listitem'

const MainPage = () => {
  return (
    <div className='main-page'>
    <div className='main-page-left w-70'>
    <div className='main-heading'>
        <AdminHeading/>
    </div>
    <div>
      <Chart/>
    </div>

    <div className='item-list'>
  
    <div className='item-heading'>
    <h1>Today</h1>
    <p>...</p>
    </div>
    <FolderList/>
   
    </div>
    </div>
      <div className='main-page-right w-30'>

      </div>
    </div>
  )
}

export default MainPage