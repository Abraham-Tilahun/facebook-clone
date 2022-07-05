import { Avatar } from '@mui/material'
import React from 'react'
import './stories.css'
const Stories = ({image, profilePic, title}) => {
  return (
    <div style={{backgroundImage: `url(${image})`}} className='stories'>
          <Avatar className='story_avator' src={profilePic} />
          <h4>{title}</h4>
    </div>
  )
}
export default Stories
