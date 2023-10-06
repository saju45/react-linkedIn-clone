/* eslint-disable react/prop-types */

import { useMemo, useState } from 'react';
import PostsCard from '../PostCard';
import './index.scss'
import { getSigleStatus, getSignleUser } from '../../../Api/FireStoreApi';
import { useLocation } from 'react-router-dom';
import { HiOutlinePencil } from "react-icons/hi";

const ProfileCard = ({currentUser,onEdit}) => {
  let location=useLocation()
  const [allStatus,setAllStatus]=useState([])
  const [currentProfile,setCurrentProfile]=useState({})


  useMemo(()=>{

    // getStatus(setAllStatus)

    if (location?.state?.id) {
      getSigleStatus(setAllStatus,location?.state?.id)
    }

    if (location?.state?.email) {
      getSignleUser(setCurrentProfile,location?.state?.email)
    }

  },[])
  console.log('current Profile : ',currentProfile.name);

  return (
    <>
      <div className='profile-card'>

      <div className='edit-btn'>
        <HiOutlinePencil className='edit-icons' onClick={onEdit}/>
      </div>

      <div className='profile-info'>
        <div>
        <h3 className='username'>
          {Object.values(currentProfile).length==0
          ?currentUser.name
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
          :`${currentProfile.city} , ${currentProfile.country} `
          } </p>

          <a className='website' href={Object.values(currentProfile).length==0
          ?currentUser.website
          :currentProfile.website
          } target='blank'>
             href={Object.values(currentProfile).length==0
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
      <span className='skill-label'>Skills :</span> &nbsp;
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