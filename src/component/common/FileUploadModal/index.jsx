/* eslint-disable react/prop-types */

import { Button, Modal,Progress } from 'antd';

import './index.scss'

const FileUploadModal = ({modalOpen,setModalOpen,uploadImage,getImage,currentImage,progress})=>{

  return (

        <Modal
        title="Add a Profile Image"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
           
            <Button disabled={currentImage?.name?false:true} key="submit" type="primary" onClick={uploadImage} >
              Upload
            </Button>,
          
          ]}
      >
        <div className='image-upload-main'>
            <p>{currentImage.name}</p>
        <label className='upload-btn' htmlFor="image-upload">Add an Image</label>
   { progress===0?<></>: <div className='progress-bar'>
    <Progress type="circle" percent={progress} />
    </div>}
       <input hidden id='image-upload' type="file" onChange={getImage} />
        </div>

      </Modal>
  )
}

export default FileUploadModal