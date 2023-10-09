/* eslint-disable react/prop-types */


import { useMemo, useState } from 'react';
import './index.scss'
import { AiOutlineComment} from 'react-icons/ai';
import {BsHandThumbsUp,BsFillHandThumbsUpFill} from 'react-icons/bs';

import { getComments, getCurrentUser, getLikes, likePost, postComment } from '../../../Api/FireStoreApi';
import { getCurrentTimeStamp } from '../../../helpers/useMoment';

const LikeButton = ({postId}) => {

    const [likesCount,setLikedCount]=useState(0)
    const [liked,setLiked]=useState(false)
    const [currentUser,setCurrentUser]=useState({})
    const [showCommentBox,setShowCommentBox]=useState(false)
    const [comment,setComment]=useState('')
    const [comments,setComments]=useState([])

    const handleLike=(postId,userId)=>{
        likePost(userId,postId,liked)

    }

    const getComment=(event)=>{
      setComment(event.target.value)
    }
    
    const addComment=()=>{
      postComment(postId,comment,getCurrentTimeStamp('LLL'),currentUser?.name)
      .then(()=>{setComment('')})
    }

    useMemo(()=>{
        getCurrentUser(setCurrentUser)
        getComments(postId,setComments)
        getLikes(currentUser.userId,postId,setLikedCount,setLiked)
    },[currentUser.userId,postId])

    // console.log(comments);
  return (
    <div className='like-container' >
     <p>{likesCount}  people like this post</p>
     
     <div className='hr-line'>
     <hr />

     </div>

     <div className='like-comment'>

     <div className='likes-comment-inner'>
     {liked?<BsFillHandThumbsUpFill onClick={()=>handleLike(postId,currentUser.userId)} size={30} color='#0a66c4'/>:<BsHandThumbsUp size={30} onClick={()=>handleLike(postId,currentUser.userId)}/>}
      <p className={liked?"blue":'black'}>{liked ? "Liked":'Like'}</p>
     </div>

     <div className='likes-comment-inner' onClick={()=>setShowCommentBox(!showCommentBox)}>
     <AiOutlineComment size={30} color={showCommentBox?'#0a66c4':'#212121'}/>
      <p className={showCommentBox?"blue":'black'}>{liked ? "Comment":'Comment'}</p>
     </div>

     </div>
     
     {showCommentBox?<> <input  onChange={getComment} type="text" value={comment}  placeholder='Add a comment' className='comment-input' name='comment'  />
     <button className='add-comment' onClick={addComment}>Add Comment</button>
     {comments.length>0? comments.map((comment)=>{
      return (
        <div key={comment.id} className='all-comments'>

          <p className='name'>{comment.name}</p>
          <p className='comment'>{comment.comment}</p>
          <p className='timestamp'>{comment.timeStamp}</p>

        </div>
      )
     }):<></>}
     </>:<></>}
    </div>
  )
}

export default LikeButton