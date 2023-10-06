/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import ProfileComponent from "../component/ProfileComponent"

import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import Loader from "../component/common/Loader"

const Profile = ({currentUser}) => {

    const [loading,setLoading]=useState(true)
    const navigate=useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth,res=> {

            if(!res?.accessToken){
                navigate('/login')
              }else{
                setLoading(false)
              } 
        })
    },[])

  return loading ? <Loader/>:<ProfileComponent currentUser={currentUser}/>
}

export default Profile