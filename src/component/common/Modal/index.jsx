/* eslint-disable react/prop-types */
import {  Modal } from 'antd';
import './index.scss'
import { Button } from 'antd';

const ModalComponent = ({modalOpen,setModalOpen,setStatus,status,sendStatus}) => {

 

  return (
    <>
   
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}

        footer={[
        
            <Button 
            onClick={sendStatus}
            key="submit"
            type="primary"
            disabled={status.length>0? false:true}>
              Post
            </Button>
        ]}
            >
        
        <input className='modal-input' type="text" placeholder='What do you want to talk about' onChange={(e)=> setStatus(e.target.value)} value={status} />

      </Modal>
   
    </>
  );
};
export default ModalComponent;