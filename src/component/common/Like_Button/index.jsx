/* eslint-disable react/prop-types */


import { useMemo, useState } from 'react';
import './index.scss'
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import { getCurrentUser, getLikes, likePost } from '../../../Api/FireStoreApi';

const LikeButton = ({postId}) => {

    const [likesCount,setLikedCount]=useState(0)
    const [liked,setLiked]=useState(false)
    const [currentUser,setCurrentUser]=useState({})

    const handleLike=(postId,userId)=>{

        likePost(userId,postId,liked)
   

    }
    

    useMemo(()=>{
        getCurrentUser(setCurrentUser)
        getLikes(currentUser.userId,postId,setLikedCount,setLiked)
    },[currentUser.userId,postId])

    console.log(likesCount);
  return (
    <div className='like-container' onClick={()=>handleLike(postId,currentUser.userId)}>
     <p>{likesCount}  people like this post</p>
     
     <div className='hr-line'>
     <hr />

     </div>
     <div className='likes-inner'>
     {liked?<AiFillHeart size={30} color='#0a66c4'/>:<AiOutlineHeart size={30}/>}
      <p className={liked?"blue":'black'}>{liked ? "Liked":'Like'}</p>
     </div>

    </div>
  )
}

export default LikeButton