/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'
import './index.scss'
import { getConnection } from '../../../Api/FireStoreApi'
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const ConnectedUsers = ({user,getCurrentUser,currentUser}) => {

  const [isConnected,setIsConnected]=useState(false)

  useEffect(()=>{
    getConnection(currentUser?.userId,user?.id,setIsConnected)
  },[currentUser?.userId,user.id])


  return (
      isConnected?<></>:
    <div className='grid-child' >
      <img src={user.imageLink} alt="" />
        <p className='name'>{user?.name}</p>
        <p className='headline'>{user?.headline}</p>
        <button onClick={()=> getCurrentUser(user.id)}> <AiOutlineUsergroupAdd size={20}/>Connect</button>
    </div>
  )
}

export default ConnectedUsers