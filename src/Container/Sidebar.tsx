import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';
import {HiBriefcase} from 'react-icons/hi';
import {links} from '../utilities/Data'
import {activeLink,normalLink} from '../utilities/styles'

const Sidebar = () => {
    const {activeMenu,setActiveMenu,currentColor,screenSize} = useStateContext();

  const handleclosesidebar=()=>{
    if (activeMenu &&  screenSize <= 700) {
      setActiveMenu(false)
    }
  }
  return (
    <div className='ml-2 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 drop-shadow-md '>
    {activeMenu && (<>
      <div className='flex justify-between items-center'>
      <Link to='/' onClick={()=>setActiveMenu(false)}
      className='items-center gap-3 ml-3 mt-24 flex 
       text-base font-bold tracking-tight dark:text-white
       text-slate-900' >
      <HiBriefcase/><span>Switch Organization</span>
      </Link>
      </div>
      <div className='mt-10'>
      {links.map((menu,idx)=>(
        <div key={idx}>
        <p className='text-gray-400 m-3 mt-4 uppercase'>
        {menu.title}
        </p>
        {menu.links.map((link,idx)=>(
         <NavLink to={link.address} key={idx} 
         onClick={handleclosesidebar}
         style={({isActive})=>({backgroundColor: isActive? currentColor :''})}
         className={({isActive})=>
        isActive ? activeLink : normalLink}>
          <div className='flex items-center justify-center gap-3 '>
          {link.icon} <span className='capitalize text-txtcolor  '>{link.name} </span>
          </div>
        
         </NavLink> 
        ))}
        </div>
       
       ))}
      </div>
      
      </>)}
    </div>
  )
}

export default Sidebar