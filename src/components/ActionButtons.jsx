import React from 'react'
import {useUserContext} from "../contexts/UserContext"
import CommentButton from './CommentButton';
import { FaEdit, FaReply, FaTrash } from 'react-icons/fa';

const ActionButtons = ({commentUserName, changeStateToEdit, changeStateToReply, changeStateToDelete}) => {
    const {username} = useUserContext();

    return (
    <div className='flex justify-end comment_button'>
      {
        commentUserName === username ?
        <>
            <CommentButton onClick={changeStateToEdit} icon={<FaEdit />} text="Edit" useTheseClassesInstead="text-primModerateBlue w-24 h-10 flex items-center gap-2 justify-center rounded text-lg hover:text-primGrayishBlue duration-100" />
            <CommentButton onClick={changeStateToDelete} icon={<FaTrash />} text="Delete" useTheseClassesInstead="text-primSoftRed w-24 h-10 flex items-center gap-2 justify-center rounded text-lg hover:text-primPaleRed duration-100" />
        </> :
            <CommentButton onClick={changeStateToReply} icon={<FaReply />} text="Reply" useTheseClassesInstead="text-primModerateBlue w-24 h-10 flex items-center gap-2 justify-center rounded text-lg hover:text-primGrayishBlue duration-100" />
      }
    </div>
  )
}

export default ActionButtons
