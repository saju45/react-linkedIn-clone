
import './index.scss'
import logo from '../../../assets/logo.jpg'
import { AiOutlineSearch,AiOutlineHome, AiOutlineUserSwitch,AiOutlineMessage,AiOutlineBell} from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import user from '../../../assets/user.jpg'
import { useNavigate } from 'react-router-dom';
import ProiflePopup from '../ProfilePopup';
import { useEffect, useState } from 'react';
import SeacrchUsers from '../SearchUsers';
import { getAllUsers } from '../../../Api/FireStoreApi';


const Topbar = () => {

  const [popupVisible,setPopupVisible]=useState(false)
  const [isSearch,setIsSearch]=useState(false)
  const [searchInput,setSearchInput]=useState('')
  const [allUsers,setAllUsers]=useState([])
  const [filteredUser,setFilteredUser]=useState([])
    const navigate=useNavigate();

    const gotoRoutes=(route)=>{
        navigate(route)
    }

    const displayPopup = () => {
      setPopupVisible(!popupVisible);
    };


    useEffect(()=>{
      getAllUsers(setAllUsers)
    },[])


    const openUserProfile=(user)=>{
      navigate('/profile',{state:{id:user?.userId,email:user.email}})
    }


    const handleSearch=()=>{

      if(searchInput!==''){

        let searched=allUsers.filter((user)=> {
          return Object.values(user).join('').toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
        })
  
        setFilteredUser(searched)
      }else{
        setFilteredUser(allUsers)
      }

   
    }


    useEffect(()=>{

      let debounced=setTimeout(()=>{
        handleSearch()
        return ()=>clearTimeout(debounced)
      },1000)
    },[searchInput])

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
        {isSearch?<SeacrchUsers setIsSearch={setIsSearch} setSearchInput={setSearchInput}/>:
        <div className='react-icons'>
        <AiOutlineSearch size={30} className='react-icon' onClick={()=>setIsSearch(true)}/>
        <AiOutlineHome size={30} className='react-icon' onClick={()=> gotoRoutes('/home')}/>
        <AiOutlineUserSwitch size={30} className='react-icon' onClick={()=> gotoRoutes('/connection')}/>
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
        }

       {searchInput.length>0?<div className="search-results">
        {filteredUser.length==0 ?<div className='search-inner'>
          No Result Found ...</div>:
           filteredUser.map((user,index)=>{
          return (
            <div key={index} className='search-inner' onClick={()=> openUserProfile(user)}>
              <img src={user.imageLink} alt="Profile" />
              <p className='name'>{user.name}</p>
              {/* <p>{user.headline}</p> */}
            </div>
          )
        })}
         </div>:<></>}

       

    </div>
  )
}

export default Topbar