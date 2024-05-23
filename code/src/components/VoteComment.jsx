import {FaPlus} from "react-icons/fa"
import {FaMinus} from "react-icons/fa"

const VoteComment = () => {
  return (
    <span className='comment_vote text-center text-primGrayishBlue max-w-32 flex bg-neutLightGray rounded-lg md:flex-col md:px-2 md:max-h-24 max-md:h-10'>
      <button className='max-md:w-1/3 grid place-items-center hover:text-primModerateBlue duration-100 md:h-1/3'>
        <FaPlus />
      </button>
      <span className="max-md:w-1/3 text-lg grid place-items-center text-primModerateBlue font-bold md:h-1/3">1</span>
      <button className='max-md:w-1/3 grid place-items-center hover:text-primModerateBlue duration-100 py-1 md:h-1/3'>
        <FaMinus />
      </button>
    </span>
  )
}

export default VoteComment
