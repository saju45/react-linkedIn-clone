
import './index.scss'
import logo from '../../../assets/logo.jpg'
import { AiOutlineSearch,AiOutlineHome, AiOutlineUserSwitch,AiOutlineMessage,AiOutlineBell} from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import user from '../../../assets/user.jpg'
import { useNavigate } from 'react-router-dom';
import { LogoutApi } from '../../../Api/AuthApi';
import Popup from 'reactjs-popup';
import ProiflePopup from '../ProfilePopup';
import { useState } from 'react';


const Topbar = () => {

  const [popupVisible,setPopupVisible]=useState(false)

    const navigate=useNavigate();
    const gotoRoutes=(route)=>{

        navigate(route)
    }


    const displayPopup = () => {
      setPopupVisible(!popupVisible);
    };

  return (
    <div className='topbar-main'>
      {popupVisible ? (
        <div className="popup-position">
          <ProiflePopup />
        </div>
      ) : (
        <></>
      )}

        <img className='linkedin-logo' src={logo} alt="logo" />
        <div className='react-icons'>
        <AiOutlineSearch size={30} className='react-icon'/>
        <AiOutlineHome size={30} className='react-icon' onClick={()=> gotoRoutes('/home')}/>
        <AiOutlineUserSwitch size={30} className='react-icon' onClick={()=> gotoRoutes('/profile')}/>
        <BsBriefcase size={30} className='react-icon'/>
        <AiOutlineMessage size={30} className='react-icon'/>
        <AiOutlineBell size={30} className='react-icon'/> 
        {/* <Popup trigger=
                {<img className='user-logo' src={user} alt="profile" />}
                position="bottom right center">
                  <ProiflePopup/>
            </Popup> */}
            <img className='user-logo' src={user} alt="profile"  onClick={displayPopup}/>

        </div>

    </div>
  )
}

export default Topbar