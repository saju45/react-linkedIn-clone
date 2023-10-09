/* eslint-disable react/prop-types */

import { useState } from 'react'
import './index.scss'
import { editProfile } from '../../../Api/FireStoreApi'
import { AiOutlineClose } from "react-icons/ai";

const ProfileEdit = ({onEdit,currentUser}) => {

    const [editInputs,setEditInpus]=useState(currentUser)

    const getInput=(event)=>{

        let {name,value}=event.target;
        let input={[name]:value}

        setEditInpus({...editInputs,...input});

    }

    const updateProfileData=()=>{
        editProfile(currentUser?.userId,editInputs);
        onEdit()
    } 


  return (
    <div className='profile-card'>
         <div className='edit-btn'>
        <AiOutlineClose className='close-icon' onClick={onEdit} size={25}/>
      </div>
     
      <div className='profile-edit-inputs'>
        <label >Name</label>
      <input value={editInputs.name}  onChange={getInput}  className='common-input' type="text" placeholder='Name ' name='name'  />
      <label >Headline</label>
      <input value={editInputs.headline} onChange={getInput} className='common-input' type="text" placeholder='Headline' name='headline' />
      <label >County</label>
      <input value={editInputs.country} onChange={getInput} className='common-input' type="text" placeholder='Country' name='country'/>
      <label >City</label>
      <input value={editInputs.city} onChange={getInput} className='common-input' type="text" placeholder='City' name='city'/>
      <label >Company</label>
      <input value={editInputs.compnay} onChange={getInput} className='common-input' type="text" placeholder='Company' name='compnay' />
      <label >Industry</label>
      <input value={editInputs.industry} onChange={getInput} className='common-input' type="text" placeholder='Industry' name='industry'/>
      <label >Collage</label>
      <input value={editInputs.collage} onChange={getInput} className='common-input' type="text" placeholder='Collage' name='collage'/>
     
      <label >Website</label>
      <input value={editInputs.website} onChange={getInput} className='common-input' type="text" placeholder='Website' name='website'/>
     
      <label >About</label>
      <textarea  rows={5} value={editInputs.about} onChange={getInput} className='common-textarea' type="text" placeholder='About' name='about'/>

      <label >Skills</label>
      <input value={editInputs.skills} onChange={getInput} className='common-input' type="text" placeholder='Skills' name='skills'/>
     


      </div>
      <div className='save-btn-container'>
      <button className='save-btn' onClick={updateProfileData}>Save</button>

      </div>
    </div>
  )
}

export default ProfileEdit