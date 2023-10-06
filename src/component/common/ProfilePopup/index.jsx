import { useMemo, useState } from "react"
import { getCurrentUser } from "../../../Api/FireStoreApi"
import { useNavigate } from "react-router-dom"
import Button from "../Button"

import './index.scss'
import { LogoutApi } from "../../../Api/AuthApi"

const ProiflePopup = () => {

    let navigate=useNavigate()
    const [currentUser,setCurrentUser]=useState({})

    useMemo(()=>{
        getCurrentUser(setCurrentUser)
    })

  return (
    <div className="popup-card">

      <p className="name">{currentUser.name}</p>
      <p className="headline">{currentUser.headline}</p>

        <Button className='common-btn' title="View Profile" onClick={()=> navigate('/profile',{
          state:{id:currentUser.userId}
        })}/>

      <Button className='common-btn' title="Logout" onClick={LogoutApi}/>
        
      
    </div>
  )
}

export default ProiflePopup