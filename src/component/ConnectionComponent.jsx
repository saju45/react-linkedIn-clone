/* eslint-disable react/prop-types */

import { useState } from 'react';
import '../sass/ConnectionComponent.scss'
import { addConnection, getAllUsers } from '../Api/FireStoreApi';
import ConnectedUsers from './common/ConnectedUsers';
import { useEffect } from 'react';

const ConnectionComponent = ({currentUser}) => {

  const [allUsers,setAllUsers]=useState([])


  useEffect(()=>{
    getAllUsers(setAllUsers)
  },[])


  const getCurrentUser=(id)=>{
    console.log(currentUser.userId);
    addConnection(currentUser?.userId,id)
  }

    console.log(allUsers);
  return (
    <div className='connections-main'>
      {allUsers.map((user)=>{
       return user.id===currentUser.userId?<></>: <ConnectedUsers key={user.id} user={user} getCurrentUser={getCurrentUser} currentUser={currentUser}/>
      })}
    </div>
  )
}

export default ConnectionComponent