/* eslint-disable react/prop-types */

import { useEffect, useMemo, useState } from 'react';
import PostsCard from '../PostCard';
import './index.scss'
import { editProfile, getSigleStatus, getSignleUser, uploadProfile } from '../../../Api/FireStoreApi';
import { useLocation } from 'react-router-dom';
import { HiOutlinePencil } from "react-icons/hi";
import { uploadImageApi } from '../../../Api/ImageUpload';

const ProfileCard = ({currentUser,onEdit}) => {
  let location=useLocation()
  const [allStatus,setAllStatus]=useState([])
  const [currentProfile,setCurrentProfile]=useState({})
  const [currentImage,setCurrentImage]=useState({})

  useMemo(()=>{

    // getStatus(setAllStatus)

    if (location?.state?.id) {
      getSigleStatus(setAllStatus,location?.state?.id)
    }

    if (location?.state?.email) {
      getSignleUser(setCurrentProfile,location?.state?.email)
    }

  },[])


  console.log(currentUser);
  const getImage=(event)=>{

    setCurrentImage(event.target.files[0]);
  }

  const uploadImage=()=>{
    uploadImageApi(currentImage,currentUser.userId)

  }


  

  return (
    <>
      <div className='profile-card'>
      <input type="file" onChange={getImage} />
      <button onClick={uploadImage}>upload</button>
      <div className='edit-btn'>
        <HiOutlinePencil className='edit-icons' onClick={onEdit}/>
      </div>

      <div className='profile-info'>
        <div>
          <img className='profile-image' src={currentUser.imageLink} />
        <h3 className='username'>
          {Object.values(currentProfile).length==0
          ? currentUser.name
          :currentProfile.name
          }
          </h3>
      <p className='headline'>
      {Object.values(currentProfile).length==0
          ?currentUser.headline
          :currentProfile.headline
          } </p>


      <p className='location'>
      {Object.values(currentProfile).length==0
          ?`${currentUser.city} , ${currentUser.country} `
          :currentProfile.city && `${currentProfile.city} , ${currentProfile.country} `
          } </p>

          <a className='website' href={Object.values(currentProfile).length==0
          ?currentUser.website
          :currentProfile.website
          } target='blank'>
            {Object.values(currentProfile).length==0
          ?currentUser.website
          :currentProfile.website
          }
          </a>


         <p className='about'>
      {Object.values(currentProfile).length==0
          ?currentUser.about
          :currentProfile.about
          } </p>
     

     <p className='skills'>
      {currentProfile.skills && <span className='skill-label'>Skills :</span>} &nbsp;
      {Object.values(currentProfile).length==0
          ?currentUser.skills
          :currentProfile.skills
          } </p>

        </div>

        <div className='right-info'>
     <p className='collage'>
     {Object.values(currentProfile).length==0
          ?currentUser.collage
          :currentProfile.collage
          }
      </p>
      <p className='company'>
      {Object.values(currentProfile).length==0
          ?currentUser.compnay
          :currentProfile.compnay
          }
        </p>
        </div>

      </div>
  

    </div>

    <div className='post-status-main'>
    {allStatus.filter((item)=>{
      return item.userEmail===Object.values(currentProfile).length==0?currentUser.email:currentProfile.email
    }).map((posts)=>{
        return  <PostsCard posts={posts} key={posts.id} />

       })}
       </div>

    </>
 
  )
}

export default ProfileCard