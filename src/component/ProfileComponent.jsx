/* eslint-disable react/prop-types */

import { useState } from "react"
import ProfileCard from "./common/ProfileCard"
import ProfileEdit from "./common/ProfileEdit"

const ProfileComponent = ({currentUser}) => {
  const [isEdit,setIsEdit]=useState(false)

  const onEdit=()=>{
    setIsEdit(!isEdit)
  }
  return (
    <div className="home-component">
     {isEdit?<ProfileEdit onEdit={onEdit} currentUser={currentUser}/>:<ProfileCard currentUser={currentUser} onEdit={onEdit}/>}
    </div>
  )
}

export default ProfileComponent