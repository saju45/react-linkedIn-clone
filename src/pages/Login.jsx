import { useEffect, useState } from "react";
import LoginComponent from "../component/LoginComponent"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Loader from "../component/common/Loader";

const Login = () => {

  const [loading,setLoading]=useState(true)

  const navigate=useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth,res=> {
        if(res?.accessToken){
          navigate('/home')
          setLoading(false)
        }else{
          setLoading(false)
        }
    })
},[])
  return loading?<Loader/> : <LoginComponent/>
}

export default Login