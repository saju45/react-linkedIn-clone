/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import Loader from "../component/common/Loader"
import ConnectionComponent from "../component/ConnectionComponent"

const Connection = ({currentUser}) => {

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

  return loading ? <Loader/>:<ConnectionComponent currentUser={currentUser}/>
}

export default Connection