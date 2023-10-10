/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom'
import './index.scss'
import LikeButton from '../Like_Button'
import { useMemo, useState } from 'react'
import { deletePost, getAllUsers, getCurrentUser } from '../../../Api/FireStoreApi'
import {BsPencil,BsTrash} from 'react-icons/bs';

const PostsCard = ({posts,getEditData}) => {

  const navigate=useNavigate()

  const [allUsers,setAllUsers]=useState([])
  const [currentUser,setCurrentUser]=useState({})


  useMemo(()=>{
    getAllUsers(setAllUsers)
    getCurrentUser(setCurrentUser)
  },[])


  
  // console.log(currentUser.userIds);
  console.log(posts.userId);

  return (
    <div className='posts-card'>
      <div className='post-image-wrapper'>
        {currentUser.userId===posts.userId?
          <div className='action-container'>
          <BsPencil size={20} className='action-icon' onClick={()=>getEditData(posts)}/>
          <BsTrash size={20} className='action-icon' onClick={()=> deletePost(posts.id)}/>
        </div>:<></>
      }
      
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