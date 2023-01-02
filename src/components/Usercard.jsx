import React from 'react'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import { IoMdExit } from 'react-icons/io';
import { useStateContext } from '../context/ContextProvider'
import { useStateValue } from '../context/contexts/contextProvider';



const Usercard = ({info,idx,click}) => {

  const {isDetails, setIsDetails}= useStateContext();

  const [{usersinfo}, dispatch] = useStateValue();

const checkDetails = (id)=>{
  const me = usersinfo.filter(x=> x.id === id)
  console.log("me",me)
  console.log("id",id)
 if (id === "1") {
  setIsDetails(true);
 }

}

  return (
    
    <div
    key={idx}
    className="relative w-full rounded-md flex items-center justify-between py-4 bg-lightOverlay cursor-pointer hover:bg-card hover:shadow-md"
  >
   
    {/*user Image*/}
    <p className=" text-xs text-primary w-275 min-w-[160px] text-center">
      {info.orgName}
    </p>
    {/*user Details*/}
    <p className=" text-xs text-primary w-275 min-w-[160px] text-center">
      {info.userName}
    </p>
    <p className=" text-xs text-primary w-275 min-w-[160px] text-center">
      {info.email}
    </p>
    <p className=" text-xs text-primary w-275 min-w-[160px] text-center">
      {info.phoneNumber}
    </p>
    <p className=" text-xs text-primary w-275 min-w-[160px] text-center">
      {info.createdAt}
    </p>
    <div className=" text-xs text-textColor w-275 min-w-[160px] text-center">
      <p className='  rounded-full  bg-active w-24 m-2 p-2 opacity-40'>
      Active
      </p>
    </div>
    {
      usersinfo &&  (
        <div
        className="absolute right-4 w-8 h-8 rounded-md flex items-center justify-center bg-gray-200"
        onClick={click}
        key={idx}
      >
        <div className="flex items-center">
          <BiDotsVerticalRounded/>
        </div>
       
    
      </div>
      )
    }
   
    {isDetails && (
      <div
        className="absolute  top-6 right-4 p-4 flex items-center flex-col gap-3 bg-white shadow-xl rounded-md"
        onClick={()=>{setIsDetails(false)}}
        key={info.id}
      >
        <p className=" text-textColor font-semibold"
        onClick={()=>{setIsDetails(false)}} >
        Activate
        </p>
        <p className=" text-textColor font-semibold" >
        Activate
        </p>
        
      </div>
    )}
    
  </div>  
    
  )
}

export default Usercard