import React from 'react'
import { useCommentsContext } from './contexts/CommentsContext'
import CommentWithReplies from './components/CommentWithReplies';
import AddComment from './components/AddComment';
import { sendCommentsToStorage } from './contexts/LocalStorage';

const App = () => {
  const {comments} = useCommentsContext();

  sendCommentsToStorage(comments);

  return (
    <div className='text-neutGrayishBlue flex flex-col gap-2 md:gap-4 max-w-[700px] justify-center p-2'>
      {comments.map(comment => <CommentWithReplies key={comment.createdAt} commentInfo={comment} />)}
      <AddComment type="normal" />
    </div>
  )
}

export default App
