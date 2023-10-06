
import Home from  '../pages/Home'
import Topbar from '../component/common/Topbar'
import { useMemo, useState } from 'react'
import { getCurrentUser } from '../Api/FireStoreApi'
import Profile from '../pages/Profile'

const ProfileLayout = () => {
  
  const [currentUser,setCurrentUser]=useState({})

  useMemo(()=>{
    getCurrentUser(setCurrentUser)
  },[])

  // console.log(currentUser);

  return (
    <div>
        <Topbar/>
        <Profile currentUser={currentUser}/>
    </div>
  )
}

export default ProfileLayout