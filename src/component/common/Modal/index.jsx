/* eslint-disable react/prop-types */
import {  Modal,Progress } from 'antd';
import './index.scss'
import { Button } from 'antd';
import { AiOutlinePicture } from 'react-icons/ai';
import { useState } from 'react';

const ModalComponent = ({modalOpen,setModalOpen,setStatus,status,sendStatus,isEdit,updateStatus,uploadPostImage,setPostImage,postImage,setCurrentPost,currentPost}) => {
  const [progress,setProgress]=useState(0)

  return (
    <>
   
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => {
          setStatus('')
          setPostImage('')
          setModalOpen(false)
          setCurrentPost({})
        }}
        onCancel={() => {
          setStatus('')
          setPostImage('')
          setModalOpen(false)
          setCurrentPost({})
        }}

        footer={[
        
            <Button 
            onClick={isEdit?updateStatus:sendStatus}
            key="submit"
            type="primary"
            disabled={status.length>0? false:true}>
              {isEdit?'Update': 'Post'}
            </Button>
        ]}
            >
        
        <div className='posts-body'>
        <textarea rows={3} cols={3} className='modal-input' type="text"  placeholder='What do you want to talk about' onChange={(e)=> setStatus(e.target.value)} value={status} />
        <div className='progress-bar'>
        {progress===0 || progress===100 ?<></>:<Progress type="circle" percent={progress} />}
    </div>
       { postImage.length>0 || currentPost?.postImage?.length ?<img className='preview-image' src={postImage || currentPost?.postImage} alt="postImage" />:<></>}
        </div>

     

        <label htmlFor="pic-upload"> <AiOutlinePicture size={35} className='picture-icon'/></label>   
        <input type="file" id='pic-upload' hidden onChange={(e)=>uploadPostImage(e.target.files[0],setPostImage,setProgress)}/>    
       
      </Modal>
   
    </>
  );
};
export default ModalComponent;