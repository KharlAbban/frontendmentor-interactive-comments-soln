import React, { useState } from 'react'
import CommentButton from './CommentButton';
import TextArea from './TextArea';

const CommentContent = ({text, isEditing, replyingTo, handleEditedComment, handleCancel}) => {
  const [commentText, setCommentText] = useState(replyingTo ? `@${replyingTo} ${text}` : text);
  
  const handleCommentChange = (newText) => {
    setCommentText(newText);
  }

  const submitEditedComment = (Event) => {
    Event.preventDefault();

    handleEditedComment(commentText);
  }

  if (isEditing) {
    return (
      <form className='w-full'>
        <TextArea text={commentText} onChange={handleCommentChange} isEditing={isEditing} />
        <CommentButton onClick={submitEditedComment} text="Update" color="bg-primModerateBlue" hoverColor="bg-primGrayishBlue" className="float-end ml-4" />
        <CommentButton onClick={handleCancel} text="Cancel" color="bg-primSoftRed" hoverColor="bg-primPaleRed" className="float-end ml-4" />
      </form>
    );
  }

  return (
  <>
    {replyingTo && <span className='font-bold text-primModerateBlue text-lg'>@{replyingTo}</span>} {text}
  </>
  )
}

export default CommentContent
