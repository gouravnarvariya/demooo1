import { Avatar, Badge } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='side-bar'>
    <div className='profile-main'>
    <div>
    <Badge badgeContent={4} color="primary">
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </Badge>
    </div>
    <div>
      <h1>Samtha</h1>
      <p>samathana@gmail.com</p>
    </div>
    </div>
    <div className='side-list'>
    <ul>
      <li>Dashboard</li>
      <li>Dashboard</li>
      <li>Dashboard</li>
      <li>Dashboard</li>
      <li>Dashboard</li>
    </ul>
    </div>
    Sidebar
    </div>
  )
}

export default Sidebar