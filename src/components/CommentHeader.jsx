import React from 'react'
import TimeCreated from './TimeCreated'

const CommentHeader = ({image, username, createdAt}) => {
  return (
    <header className='md:ml-2 flex comment_header gap-4 items-center'>
      <img src={image} className='w-8 h-8' alt="pic" />
      <h2 className='text-lg font-bold text-neutDarkBlue'>{username}</h2>
      <TimeCreated createdAt={createdAt} />
    </header>
  )
}

export default CommentHeader
