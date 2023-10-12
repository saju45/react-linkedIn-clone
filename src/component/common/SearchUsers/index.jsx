/* eslint-disable react/prop-types */

import './index.scss'
import { AiOutlineCloseCircle } from 'react-icons/ai';

const SeacrchUsers = ({setIsSearch,setSearchInput}) => {

    const closeBtn=()=>{
        setIsSearch(false)
        setSearchInput('')
    }

  return (
    <div className='search-users'>
        <input type="text" placeholder='Search users...'  onChange={(e)=>setSearchInput(e.target.value)} />
        <AiOutlineCloseCircle className='close-icon' size={20} onClick={closeBtn}/>
    </div>
  )
}

export default SeacrchUsers