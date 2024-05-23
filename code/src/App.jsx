import React from 'react'
import { AddComment, CommentWithReplies } from './components'

const App = () => {
  return (
    <main className="text-neutGrayishBlue flex flex-col gap-2 md:gap-4 max-w-[700px] justify-center p-2">
      <CommentWithReplies />
      <AddComment />
    </main>
  )
}

export default App
