
import { useState } from 'react'
import { LoginApi, SignInWithGoogle } from '../Api/AuthApi'
import linkdedIn_logo from '../assets/logo.jpg'

import '../sass/LoginComponent.scss'
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom'

const LoginComponent = () => {


  const navigate=useNavigate()

    const [creadential,setCredential]=useState({})
    const login=async()=>{
       const res= await LoginApi(creadential.email,creadential.password)

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
      <h1 className='heading'>Sign in</h1>
      <p className='sub-heading'>Stay update on your professional world</p>
        
        <div className='auth-inputs'>
        <input type="email" className='common-input' placeholder='Email or Phone'
         onChange={(event)=> setCredential({...creadential,email:event.target.value})} />
         
         <input type="password" className='common-input' placeholder='Password'
         onChange={(event)=> setCredential({...creadential,password:event.target.value})} />
        </div>
        <button className='login-btn' onClick={login}>Sign in</button>
      </div>
      <hr  className="hr-text" data-content="OR"/>
      <div className='google-btn-container'>
      <GoogleButton className='button' onClick={googleSignIn}/>  
      <p className='goto-signup' >New to LinkedIn ? <span className='join-now' onClick={()=> navigate('/register')}>Join now</span> </p>
      </div>
  
 </div>
  )
}

export default LoginComponent