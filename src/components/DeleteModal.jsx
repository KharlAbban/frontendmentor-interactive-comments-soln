import React from 'react'
import CommentButton from './CommentButton'

const DeleteModal = ({handleCancel, handleDelete}) => {
  return (
    <section className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 grid place-items-center'>
      <div className='w-96 h-48 p-3 grid place-items-center bg-white rounded shadow'>
        <h1 className="font-bold text-2xl text-center text-neutDarkBlue">Do you want to delete this comment?</h1>
        <div className="flex justify-end gap-4">
        <CommentButton onClick={handleCancel} color="bg-primModerateBlue" hoverColor="bg-primGrayishBlue" text="Cancel" />
        <CommentButton onClick={handleDelete} color="bg-primSoftRed" hoverColor="bg-primPaleRed" text="Delete" />
        </div>
      </div>
    </section>
  )
}

export default DeleteModal
