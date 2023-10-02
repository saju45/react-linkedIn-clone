
import './index.scss'
import logo from '../../../assets/logo.jpg'
import { AiOutlineSearch,AiOutlineHome, AiOutlineUserSwitch,AiOutlineMessage,AiOutlineBell} from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import user from '../../../assets/user.jpg'
import { useNavigate } from 'react-router-dom';

const Topbar = () => {

    const navigate=useNavigate();
    const gotoRoutes=(route)=>{

        navigate(route)
    }
  return (
    <div className='topbar-main'>
        <img className='linkedin-logo' src={logo} alt="logo" />
        <div className='react-icons'>
        <AiOutlineSearch size={30} className='react-icon'/>
        <AiOutlineHome size={30} className='react-icon' onClick={()=> gotoRoutes('/home')}/>
        <AiOutlineUserSwitch size={30} className='react-icon' onClick={()=> gotoRoutes('/profile')}/>
        <BsBriefcase size={30} className='react-icon'/>
        <AiOutlineMessage size={30} className='react-icon'/>
        <AiOutlineBell size={30} className='react-icon'/>

        </div>
        <img className='user-logo' src={user} alt="profile" />

    </div>
  )
}

export default Topbar