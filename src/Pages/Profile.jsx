import React, { useEffect } from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai'
import { useStateValue } from '../context/contexts/contextProvider';
import { Link } from 'react-router-dom';
import { getUser } from '../Api/Apicalls';
import { actionType } from '../context/contexts/reducer';
import { useStateContext } from '../context/ContextProvider';

const Profile = () => {
  const [{userinfo}, dispatch] = useStateValue();
  const { isDetails, setIsDetails, Loading ,userId, setUserId} = useStateContext();

 
  useEffect(() => {
    getUser(userId).then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({
        type: actionType.SET_USER,
        userinfo: data,
      });})
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    
    <div className='flex flex-col justify-center mt-16  m-2 md:m-10 p-2  md:p-10 bg-bguser rounded-2xl'>
     {
      userinfo && (
        <>
        <Link
        to={"/dashboard/users"}
        >
        <div className='flex items-center justify-start gap-3'>
    <p><BsArrowLeft/></p> <span> Back to Users</span>
      </div>
      </Link>
      <div className='flex items-center justify-between mt-3'>
      <p className=' text-[#213F7D] text-base font-bold'>User Details</p>
    <div className='flex items-center justify-center'>
    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      BLACKLIST USER
  </span>
</button>
<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      ACTIVATE USER
  </span>
</button>
    </div>
      </div>
    <div className='flex flex-col  gap-8 bg-white rounded-md px-3 mx-3 pt-4 mt-4'>
      <div className='flex items-center '>
      <div className='flex items-center justify-start gap-2 border-solid border-r-2  border-cyan-50'>
      <img className="w-10 h-10 rounded-full" src={userinfo.profile.avatar} alt="" id='profile__img'/>
      <div className='flex flex-col items-start justify-center'>
        <p className='text-[#213F7D] text-base font-bold'>{userinfo.userName} </p>
        <p>HG739899</p>
      </div>
      <div className=''> </div>
      </div>
      <div className='flex  items-center justify-center gap-3 ml-3 border-solid border-r-2  border-cyan-50'>
        <div className='flex flex-col items-start justify-center gap-3'>
        <p className='text-[#213F7D] text-base font-bold'>User's Tier</p>
        <p className='flex items-center justify-center'><AiFillStar/> <AiOutlineStar/> <AiOutlineStar/></p>
        </div>
        <div className=''> </div>
      </div>
      <div className='flex flex-col items-start ml-3 justify-start'>
      <p className='text-[#213F7D] text-base font-bold'>{`#${userinfo.accountBalance}`}</p>
      <p>{userinfo.accountNumber} /<span>Providus Bank</span></p>
      </div>
      </div>
    <div className='flex items-center justify-around mt-3'>
    <p className='border-solid border-b-2  border-[#39CDCC] text-[#39CDCC]'>General Details</p>
    <p className=''>Documents</p>
    <p className=''>Bank Details</p>
    <p className=''>Loans</p>
    <p className=''>Savings</p>
    <p className=''>App and Systems</p>
    </div>
    </div>
    <div className='flex flex-col  gap-8 bg-white rounded-md px-3 mx-3 pt-4 mt-4'>
    <div className='flex flex-col items-start gap-5  border-solid border-b-2  border-[#39CDCC]'>
    <p className='text-[#213F7D] text-base font-bold'>Personal Information</p>
    <div className='flex items gap-20 mb-2'>
      <div className='flex flex-col items-start justify-center'><p className=''>FULL NAME</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.profile.firstName}<span className=' ml-2'>{userinfo.profile.lastName}</span> </p></div>
      <div className='flex flex-col items-start justify-center'><p className=''>PHONE NUMBER</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.profile.phoneNumber} </p></div>
      <div className='flex flex-col items-start justify-center'><p className=''> EMAIL ADDRESS</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.email}</p></div>
      <div className='flex flex-col items-start justify-center'><p className=''>BVN</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.profile.bvn}</p></div>
      <div className='flex flex-col items-start justify-center'><p className=''>GENDER</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.profile.gender}</p></div>
    </div>
    <div className='flex items-start gap-32 mb-2'>
    <div className='flex flex-col items-start justify-center'><p className=''>MARITAL STATUS</p> <p className='text-[#213F7D] text-base font-bold'>SINGLE </p></div>
      <div className='flex flex-col items-start justify-center'><p className=''>CHILDREN</p> <p className='text-[#213F7D] text-base font-bold'> None</p></div>
      <div className='flex flex-col items-start justify-center'><p className=''> TYPE OF RESIDENT</p> <p className='text-[#213F7D] text-base font-bold'>Parent's Apartment</p></div>
    </div>
    <div className=''></div>
    </div>
    <div className='flex flex-col items-start gap-5  border-solid border-b-2  border-[#39CDCC]'>
    <p className='text-[#213F7D] text-base font-bold'>Education and Employement</p>
    <div className='flex items gap-24'>
      <div className='flex flex-col items-start justify-center'><p className=''>LEVEL OF EDUCATION</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.education.level}</p></div>
      <div className='flex flex-col items-start justify-center'><p className=''>EMPLOYEMENT STATUS</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.education.employmentStatus}</p></div>
      <div className='flex flex-col items-start justify-center'><p className=''> SECTOR OF EMPLOYEMENT</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.education.sector}</p></div>
      <div className='flex flex-col items-start justify-center'> <p className=''>DURATION OF EMPLOYEMENT</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.education.duration}</p></div>
    </div>
    <div className='flex items-start gap-32 mb-2'>
    <div className='flex flex-col items-start justify-center'><p className=''>OFFICE EMAIL</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.education.officeEmail} </p></div>
      <div className='flex flex-col items-start justify-center'><p className=''>MONTHLY INCOME</p> <p className='text-[#213F7D] text-base font-bold'> {`#${userinfo.education.monthlyIncome[0]}`}<span>-</span><span className='text-[#213F7D] text-base font-bold'>{`#${userinfo.education.monthlyIncome[1]}`}</span></p></div>
      <div className='flex flex-col items-start justify-center'><p className=''> LOAN REPAYMENT</p> <p className='text-[#213F7D] text-base font-bold'> {userinfo.education.loanRepayment}</p></div>
    </div>
    <div className=''></div>
    </div>
    <div className='flex flex-col items-start gap-5  border-solid border-b-2  border-[#39CDCC]'>
    <p className='text-[#213F7D] text-base font-bold'>Socials</p>
    <div className='flex items-start gap-32 mb-2'>
    <div className='flex flex-col items-start justify-center'><p className=''>TWITTER</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.socials.twitter} </p></div>
      <div className='flex flex-col items-start justify-center'><p className=''>FACEBOOK</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.socials.facebook}</p></div>
      <div className='flex flex-col items-start justify-center'><p className=''>INSTAGRAM</p> <p className='text-[#213F7D] text-base font-bold'> {userinfo.socials.instagram}</p></div>
    </div>
    <div className=''></div>
    </div>
    <div className='flex flex-col items-start gap-5  border-solid border-b-2  border-[#39CDCC]'>
    <p className='text-[#213F7D] text-base font-bold'>Guarantor</p>
    <div className='flex items-start gap-32 mb-2'>
    <div className='flex flex-col items-start justify-center'><p className=''>FULL NAME</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.guarantor.firstName}<span className=' ml-2 text-[#213F7D] text-base font-bold'>{userinfo.guarantor.lastName}</span></p></div>
      <div className='flex flex-col items-start justify-center'><p className=''>PHONE NUMBER</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.guarantor.phoneNumber}</p></div>
      <div className='flex flex-col items-start justify-center'><p className=''>EMAIL ADDRESS</p> <p className='text-[#213F7D] text-base font-bold'> {userinfo.guarantor.address}</p></div>
      <div className='flex flex-col items-start justify-center'><p className=''>RELATIONSHIP</p> <p className='text-[#213F7D] text-base font-bold'> Sister</p></div>
    </div>
    <div className=''></div>
    </div>
    <div className='flex flex-col items-start gap-5  '>
    <p></p>
    <div className='flex items-start gap-32 mb-3'>
    <div className='flex flex-col items-start justify-center'><p className=''>FULL NAME</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.guarantor.firstName}<span className=' ml-2'>{userinfo.guarantor.lastName}</span> </p></div>
      <div className='flex flex-col items-start justify-center'><p className=''>PHONE NUMBER</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.guarantor.phoneNumber}</p></div>
      <div className='flex flex-col items-start justify-center'><p className=''>EMAIL ADDRESS</p> <p className='text-[#213F7D] text-base font-bold'>{userinfo.guarantor.address}</p></div>
      <div className='flex flex-col items-start justify-center'><p className=''>RELATIONSHIP</p> <p className='text-[#213F7D] text-base font-bold'> Sister</p></div>
    </div>
    <div className=''></div>
    </div>
    </div>
        </>
      )
     }
      
    </div>
  )
}

export default Profile