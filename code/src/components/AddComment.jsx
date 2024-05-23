import React from 'react'

const AddComment = () => {
  return (
    <form onSubmit={() => {}} className='bg-white rounded p-4 flex flex-wrap justify-between gap-4'>
      <img src="/avatars/image-juliusomo.png" className='w-10 h-10 max-md:order-1' alt="" />
      <textarea className='text-neutDarkBlue focus:border-primModerateBlue outline-none resize-none overflow-y-auto caret-primModerateBlue rounded border-2 p-3 border-neutLightGray grow min-h-28 max-md:w-full max-md:order-0' name="" rows={4} placeholder='Add comment...' id=""></textarea>
      <button className='max-md:order-1 uppercase rounded bg-primModerateBlue h-10 px-6 text-neutVeryLightGray hover:bg-primGrayishBlue duration-100'>Send</button>
    </form>
  )
}

export default AddComment
