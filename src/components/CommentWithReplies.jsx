import React from 'react'
import CommentCard from './CommentCard';

const CommentWithReplies = ({commentInfo}) => {
    const replies = commentInfo.replies.map(reply => <CommentCard key={reply.createdAt} {...reply} parentId={commentInfo.id} />);
    const repliesContainer = (
        <div className='relative pl-8 ml-4 border-l-4 border-l-primGrayishBlue flex flex-col gap-4 mb-2 max-md:pl-4 max-md:border-l-3 max-md:ml-2'>
            {replies}
        </div>
    )
  return (
    <>
        <CommentCard {...commentInfo} />
        {repliesContainer}
    </>
  )
}

export default CommentWithReplies
