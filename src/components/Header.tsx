import {Icon,Search} from '../components'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {MdLogout} from 'react-icons/md'
import IMG from '../Images/image 4 (1).png'
import { useStateContext } from '../context/ContextProvider'
import { useEffect } from 'react'


const Header = () => {
  const {setActiveMenu,isMenu,setIsMenu,ActiveMenu,screenSize,setScreenSize,}= useStateContext();

  
    useEffect(() => {
      const handleResize =()=>setScreenSize(window.innerWidth);
      window.addEventListener('resize',handleResize);
      handleResize();
      return ()=> window.removeEventListener('resize',handleResize);
    
    }, [setScreenSize]);
    
    useEffect(() => {
     if (screenSize <= 700) {
      setActiveMenu(false)
     } else {
       setActiveMenu(true)
     }
    
  
    }, [screenSize,setActiveMenu])

    

  return (
    <div className='fixed z-50 w-screen p-3 px-4  loginbg'>
    {/* desktop & tablet */}
    <div className='hidden md:flex w-full h-full items-center justify-between gap-4'>
    <div className='flex items-center justify-center gap-36'>
        <Icon/>
        <Search/>
    </div>
    <div className='flex items-center justify-evenly gap-10'>
        <p>Docs</p>
        <IoIosNotificationsOutline/>
        <div className='flex items-center justify-center gap-3'>
        <img className="w-10 h-10 rounded-full" src={IMG} alt="" id='profile__img'/>
            <p>Raheem</p>
            <svg width="10" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.39229 4.0516C3.72823 4.42504 4.27511 4.42192 4.60791 4.0516L7.48291 0.856996C7.81885 0.484336 7.68525 0.181995 7.18447 0.181995H0.815667C0.314887 0.181995 0.183627 0.487456 0.517227 0.856996L3.39229 4.0516Z" fill="#213F7D"/>
</svg>
        </div>
    </div>
        
    </div>
    {/* mobile */}
    <div className='flex flex-col  items-center justify-center md:hidden w-full h-full'>
    <div className='flex items-center justify-between w-full mb-8'>
    <div className='' onClick={()=>setActiveMenu(!ActiveMenu)}>
    <Icon/>
    </div>
    
    <div className='relative'>
    <div className='flex  items-center justify-center gap-1'  onClick={() => setIsMenu(!isMenu)}>
        <img className="w-10 h-10 rounded-full" src={IMG} alt="" id='profile__img'/>
        
        </div>
    {
        isMenu && (
            <div className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>
              <ul className="flex flex-col items-start justify-center ">
              <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Raheem
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Profile
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                    <p className='flex items-center justify-center gap-2'>
                    Notification <span><IoIosNotificationsOutline/></span> 
                    </p>
                 
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Docs
                </li>
                
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                
                </li>
              </ul>

              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                
              >
                Logout <MdLogout />
              </p>
            </div>
        )
    }
    </div>
    </div>
    <Search/>
    </div>
    </div>
    
  )
}

export default Header