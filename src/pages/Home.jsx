/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import HomeComponent from "../component/HomeComponent"

import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import Loader from "../component/common/Loader"

const Home = ({currentUser}) => {

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

  return loading ? <Loader/>:<HomeComponent currentUser={currentUser}/>
}

export default Home