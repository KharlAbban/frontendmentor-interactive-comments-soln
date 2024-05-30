import React from 'react'

const CommentButton = ({onClick, icon, useTheseClassesInstead, text, className, color, hoverColor}) => {
  const classNames =`uppercase rounded h-10 px-6 text-neutVeryLightGray duration-100 flex gap-4 justify-center items-center`;

  return (
    <button onClick={onClick} className={`${useTheseClassesInstead !== undefined ? useTheseClassesInstead : classNames} ${className} hover:${hoverColor} ${color}`}>
      {icon}
      {text}
    </button>
  )
}

export default CommentButton
