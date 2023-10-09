/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom'
import './index.scss'
import LikeButton from '../Like_Button'
import { useMemo, useState } from 'react'
import { getAllUsers, getCurrentUser } from '../../../Api/FireStoreApi'

const PostsCard = ({posts}) => {

  const navigate=useNavigate()

  const [allUsers,setAllUsers]=useState([])
  const [currentUser,setCurrentUser]=useState({})


  useMemo(()=>{
    getAllUsers(setAllUsers)
    getCurrentUser(setCurrentUser)
  },[])


  
  console.log();

  return (
    <div className='posts-card'>
      <div className='post-image-wrapper'>
      <img className='post-image' alt='profile image' src={allUsers.filter((item)=> item.id===posts.userId)
       .map((item)=> item.imageLink)[0]} />
     
       <div>
       <p className='name' onClick={()=>navigate('/profile',{state:{id:posts?.userId,email:posts.userEmail}})}>{posts.userName}</p>
      <p className='timeStamp'>{posts.timeStamp}</p>
       </div>


      </div>
      
        <p className='status'>{posts.status}</p>
        <LikeButton postId={posts.postId}/>
    </div>
  )
}

export default PostsCard