import { Avatar, AvatarGroup } from '@mui/material'
import React from 'react'

const AdminHeading = () => {
  return (
    <div className='AdminHeading'>
    <div>
    <h1>Expensess</h1>
    <p>01 - 25 March, 2020</p>
    </div>
    <div>
    <AvatarGroup max={4}>
  <Avatar    alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
    </div>
    </div>
  )
}

export default AdminHeading