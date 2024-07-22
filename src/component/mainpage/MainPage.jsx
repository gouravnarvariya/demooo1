import React from 'react'
import AdminHeading from './sub-component/AdminHeading'
import Chart from './sub-component/Chart'

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
    </div>
      <div className='main-page-right w-30'>

      </div>
    </div>
  )
}

export default MainPage