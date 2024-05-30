import React, { useState } from 'react'
import { useUserContext } from '../contexts/UserContext'
import TextArea from './TextArea';
import CommentButton from './CommentButton';
import { useCommentsContext } from '../contexts/CommentsContext';

const AddComment = ({type, replyingTo, handleCancel, parentId, id}) => {
  const user = useUserContext();
  const {commentsDispatch} = useCommentsContext();
  const [text, setText] = useState(type === "reply" ? `@${replyingTo}` : ``);

  const handleNewComment = (Event) => {
    Event.preventDefault();

    if (text.replace(`@${replyingTo}`, '').trim() === '') return alert("You need to add a comment!");

    if (type !== "reply") {
      commentsDispatch({
        type: "new_comment",
        newComment: {
          id: new Date(),
          content: text.trim(),
          createdAt: new Date(),
          score: 0,
          user,
          replies: []
        }
      })
    } else {
      commentsDispatch({
        type: "new_reply",
        newReply: {
          id: new Date(),
          content: text.replace(`@${replyingTo}`, '').trim(),
          createdAt: new Date(),
          score: 0,
          user,
          replyingTo
        },
        parentId: parentId,
        id: id,
        isReply: parentId !== undefined
      })
    }

    setText("");
    type === "reply" && handleCancel();
  }

  return (
    <form className={`${type === "reply" ? "z-10" : "z-0"} bg-white rounded p-4 flex flex-wrap justify-between gap-4 relative w-full`}>
      <img src={user.image.png} className='w-10 h-10 max-md:order-1' alt="" />
      <TextArea text={text} onChange={setText} autoFocus={type === "reply"} />
      <div className='flex gap-4 max-md:order-2 md:flex-col'>
      <CommentButton onClick={handleNewComment} color="bg-primModerateBlue" hoverColor="bg-primGrayishBlue" text={type === "reply" ? "Reply" : "Send"} />
      {type === "reply" && <CommentButton onClick={handleCancel} color="bg-primSoftRed" hoverColor="bg-primPaleRed" text="Cancel" />}
      </div>
    </form>
  )
}

export default AddComment
