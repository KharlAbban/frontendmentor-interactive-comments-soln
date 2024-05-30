import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import CommentButton from './CommentButton'

const CommentVotes = ({handleVoteIncrease, handleVoteDecrease, score}) => {
  return (
    <span className="comment_vote text-center text-primGrayishBlue w-28 flex bg-neutLightGray rounded-lg md:flex-col md:px-2 md:max-w-12 md:max-h-24 max-md:h-10">
        <CommentButton icon={<FaPlus />} onClick={handleVoteIncrease} useTheseClassesInstead="max-md:w-1/3 grid place-items-center hover:text-primModerateBlue duration-100 md:h-1/3" />
        <span className='max-md:w-1/3 text-lg grid place-items-center text-primModerateBlue font-bold md:h-1/3'>{score}</span>
        <CommentButton icon={<FaMinus />} onClick={handleVoteDecrease} useTheseClassesInstead="max-md:w-1/3 grid place-items-center hover:text-primModerateBlue duration-100 py-1 md:h-1/3" />
    </span>
  )
}

export default CommentVotes
