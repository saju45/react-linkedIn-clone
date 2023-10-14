
import Home from  '../pages/Home'
import Topbar from '../component/common/Topbar'
import { useMemo, useState } from 'react'
import { getCurrentUser } from '../Api/FireStoreApi'

const HomeLayout = () => {
  
  const [currentUser,setCurrentUser]=useState({})

  useMemo(()=>{
    getCurrentUser(setCurrentUser)
  },[])

  // console.log(currentUser);

  return (
    <div>
        <Topbar currentUser={currentUser}/>
        <Home currentUser={currentUser}/>
    </div>
  )
}

export default HomeLayout