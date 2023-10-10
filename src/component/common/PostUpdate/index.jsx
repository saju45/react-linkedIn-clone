/* eslint-disable react/prop-types */

import { useMemo, useState } from 'react';
import ModalComponent from '../Modal'
import './index.scss'
import { AddPost ,getStatus, updatePostApi} from '../../../Api/FireStoreApi';
import PostsCard from '../PostCard';
import { getCurrentTimeStamp } from '../../../helpers/useMoment';
import { getUniqueId } from '../../../helpers/getUniqId';


const PostStatus = ({currentUser}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status,setStatus]=useState('')
  const [allStatus,setAllStatus]=useState([])
  const [isEdit,setIsEdit]=useState(false)
  const [currentPost,setCurrentPost]=useState({})

  const sendStatus= async()=>{

    const object={
      status:status,
      timeStamp:getCurrentTimeStamp('LLL'),
      userEmail:currentUser.email,
      userName :currentUser.name,
      userId: currentUser.userId,
      postId:getUniqueId()
    }


    await AddPost(object)
    setIsEdit(false)
    await setModalOpen(false)
    await setStatus('')
  }

  useMemo(()=>{
    getStatus(setAllStatus)
  },[])


  const getEditData=(post)=>{
    setIsEdit(true)
    setModalOpen(true)
    setCurrentPost(post)
   setStatus(post?.status);
  }

  const updateStatus=()=>{
  
    updatePostApi(currentPost.id,status)
    setModalOpen(false)
  }


  return (
    <div className='post-status-main'>

      <div className='post-status'>
        <button className='open-post-modal' onClick={() => setModalOpen(true)}>Start a post</button>
      </div>

      <ModalComponent
       setStatus={setStatus} 
       status={status} 
       modalOpen={modalOpen} 
       setModalOpen={setModalOpen}
       sendStatus={sendStatus}
       isEdit={isEdit}
       updateStatus={updateStatus}
       />

       <div>
    {allStatus.map((posts)=>{
        return  <PostsCard posts={posts} key={posts.id} getEditData={getEditData} />

       })}
       </div>
   

    </div>
  )
}

export default PostStatus