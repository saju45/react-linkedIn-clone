
import { useState } from 'react';
import ModalComponent from '../Modal'
import './index.scss'
import { AddPostApi } from '../../../Api/FireStoreApi';

const PostStatus = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status,setStatus]=useState('')

  const sendStatus= async()=>{
    await AddPostApi(status)
    await setModalOpen(false)
    await setStatus('')
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
       />
    </div>
  )
}

export default PostStatus