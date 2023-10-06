
import { useState } from 'react'
import {  RegisterApi, SignInWithGoogle } from '../Api/AuthApi'
import linkdedIn_logo from '../assets/logo.jpg'

import '../sass/LoginComponent.scss'
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom'
import { addUserData } from '../Api/FireStoreApi'

const RegisterComponent = () => {


  const navigate=useNavigate()

    const [creadential,setCredential]=useState({})
  
    const register=async()=>{

      const object={
        name : creadential.name,
        email:creadential.email,
        password:creadential.password
      }

       const res=await RegisterApi(creadential.email,creadential.password)
        await addUserData(object)
       localStorage.setItem('userEmail',res.user.email);
        navigate('/home')
    }

    const googleSignIn=()=>{
      const res= SignInWithGoogle()
      navigate('/home')
      console.log(res);
    }

  return (
    <div className='login-wrapper'>
      <img src={linkdedIn_logo} className='linkedInLogo' />


      <div className='login-wrapper-inner'>
      <h1 className='heading'>Make the most of your professional life</h1>
        
        <div className='auth-inputs'>

          <input type="text" className='common-input' placeholder='Your Name '
         onChange={(event)=> setCredential({...creadential,name:event.target.value})} />

        <input type="email" className='common-input' placeholder='Email or Phone'
         onChange={(event)=> setCredential({...creadential,email:event.target.value})} />
         
         <input type="password" className='common-input' placeholder='Password (6 or more character)'
         onChange={(event)=> setCredential({...creadential,password:event.target.value})} />
        </div>
        <button className='login-btn' onClick={register}>Agree & join</button>
      </div>
      <hr  className="hr-text" data-content="OR"/>
      <div className='google-btn-container'>
      <GoogleButton className='button' onClick={googleSignIn}/>  
      <p className='goto-signup' >Already on LinkedIn ? <span className='join-now' onClick={()=> navigate('/login')}>Sign in</span> </p>
      </div>
  
 </div>
  )
}

export default RegisterComponent