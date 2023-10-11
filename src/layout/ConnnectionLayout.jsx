
import Topbar from '../component/common/Topbar'
import { useMemo, useState } from 'react'
import { getCurrentUser } from '../Api/FireStoreApi'
import Connection from '../pages/Connection'

const ConnectionLayout = () => {
  
  const [currentUser,setCurrentUser]=useState({})

  useMemo(()=>{
    getCurrentUser(setCurrentUser)
  },[])

  // console.log(currentUser);

  return (
    <div>
        <Topbar/>
        <Connection currentUser={currentUser}/>
    </div>
  )
}

export default ConnectionLayout