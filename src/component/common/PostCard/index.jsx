/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom'
import './index.scss'
import LikeButton from '../Like_Button'
import { useEffect, useMemo, useState } from 'react'
import { deletePost, getAllUsers, getConnection, getCurrentUser } from '../../../Api/FireStoreApi'
import {BsPencil,BsTrash} from 'react-icons/bs';
import { Modal } from 'antd'

const PostsCard = ({posts,getEditData}) => {

  const navigate=useNavigate()

  const [allUsers,setAllUsers]=useState([])
  const [currentUser,setCurrentUser]=useState({})
  const [imageModal,setImageModal]=useState(false)
  const [isConnected,setIsConnected]=useState(false)


  useMemo(()=>{
    getAllUsers(setAllUsers)
    getCurrentUser(setCurrentUser)
  },[])

  useEffect(()=>{
    getConnection(currentUser?.userId,posts.userId,setIsConnected)
  },[currentUser?.userId,posts.userId])

  console.log(isConnected);
  console.log(allUsers.filter((user)=>user.userId===posts.userId)[0]?.name);
  // console.log(posts.userId);

  return (
    isConnected ||currentUser?.userId=== posts.userId?
    <div className='posts-card'>
      <div className='post-image-wrapper'>
        {currentUser.userId===posts.userId?
          <div className='action-container'>
          <BsPencil size={20} className='action-icon' onClick={()=>getEditData(posts)}/>
          <BsTrash size={20} className='action-icon' onClick={()=> deletePost(posts.id)}/>
        </div>:<></>
      }
      
      <img  className='profile-image' alt='profile image' src={allUsers.filter((item)=> item.id===posts.userId)
       .map((item)=> item.imageLink)[0]} />
     
       <div>
       <p className='name'
        onClick={()=>navigate('/profile',{state:{id:posts?.userId,email:posts.userEmail}})}>
          {posts.userName}
          </p>
          <p className='headline'>{allUsers.filter((user)=>user.id===posts?.userId)[0]?.headline}</p>
          <p className='timeStamp'>{posts.timeStamp}</p>
       </div>

      </div>
       {posts.postImage? <img className='post-image' src={posts.postImage} alt='post-image' onClick={()=>setImageModal(true)}/>:<></> }     
        <div className='status' dangerouslySetInnerHTML={{__html:posts.status}}></div>
        <LikeButton postId={posts.postId}/>

        <Modal
        centered
        open={imageModal}
        onOk={() => setImageModal(false)}
        onCancel={() => setImageModal(false)}
        footer={[]}
      >
               {posts.postImage? <img className='post-image modal' src={posts.postImage} alt='post-image' onClick={()=>setImageModal(true)}/>:<></> }     
      </Modal>


    </div>:<></>
  )
}

export default PostsCard