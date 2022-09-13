import React from 'react'
import { AiOutlineLike } from "react-icons/ai";

function Comment() {
  return (
    <div>
      <div className='alldone'>
        
        <div className='done'>
          <div className='done1'><AiOutlineLike/></div>
          <div className='done2'>Comment</div>
        </div>

      <input type="text"  placeholder='add your comment' />
      </div>
    </div>
  )
}

export default Comment