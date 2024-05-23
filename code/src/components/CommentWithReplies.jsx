import { FaReply } from 'react-icons/fa'
import VoteComment from './VoteComment'

const CommentWithReplies = () => {
  return (
    <article className="comment bg-white rounded p-4">
      <header className='md:ml-2 flex comment_header gap-4 items-center'>
        <img src="/avatars/image-amyrobson.png" className='w-8 h-8' alt="" />
        <h2 className='text-lg font-bold text-neutDarkBlue'>amyrobson</h2>
        <p>1 month ago</p>
      </header>
      <main className="comment_content md:ml-2">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</main>
      <VoteComment />
      <div className='comment_button'>
        <button className='float-end w-28 h-10 flex items-center gap-2 justify-center rounded text-lg text-primModerateBlue hover:text-primGrayishBlue duration-100'>
          <FaReply />
          Reply
        </button>
      </div>
    </article>
  )
}

export default CommentWithReplies
