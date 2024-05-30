import React from 'react'

const TextArea = ({text, onChange, isEditing, autoFocus}) => {
  const highlightTextArea =(Event) => {
    Event.currentTarget.selectionStart = Event.currentTarget.value.length;
  }

  return (
    <textarea required autoFocus={isEditing || autoFocus} onFocus={highlightTextArea} placeholder='Add comment...' name="textarea" rows={4} value={text} onChange={(Event) => onChange(Event.target.value)} className={`${isEditing ? 'w-full' : ''} text-neutDarkBlue focus:border-primModerateBlue outline-none resize-none overflow-y-auto caret-primModerateBlue rounded border-2 p-3 border-neutLightGray grow min-h-28 max-md:w-full max-md:order-0`}>
    </textarea>
  )
}

export default TextArea
