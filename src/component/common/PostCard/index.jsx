/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom'
import './index.scss'

const PostsCard = ({posts}) => {

  const navigate=useNavigate()

  return (
    <div className='posts-card'>
      <p className='name' onClick={()=>navigate('/profile',{state:{id:posts?.userId,email:posts.userEmail}})}>{posts.userName}</p>
        <p className='timeStamp'>{posts.timeStamp}</p>
        <p className='status'>{posts.status}</p>
    </div>
  )
}

export default PostsCard