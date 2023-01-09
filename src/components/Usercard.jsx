import React, { useState,useRef } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { useStateValue } from "../context/contexts/contextProvider";
import useOnClickOutside from '../components/UseclickOutside'
import { getUser } from "../Api/Apicalls";
import { actionType } from "../context/contexts/reducer";
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {FaUserTimes,FaUserCheck} from 'react-icons/fa'

const Usercard = ({ info, keys }) => {
  const { isDetails, setIsDetails, Loading ,userId, setUserId} = useStateContext();
const ref = useRef();


  const [det, setdet] = useState(false)
  useOnClickOutside(ref,()=> setdet(false))

  const [{ usersinfo }, dispatch] = useStateValue();

  const Details = () => {
    setdet(!isDetails);
  };
const activateUser =(info)=>{
setdet(!isDetails);
// const data = usersinfo.filter(data=>data.id === info);
// console.log('active',data[0].education.loanRepayment);
const data = usersinfo.filter(item=>item.id===info );
console.log('active',data);
}
  const updateDetails = (userid) => {
    setdet(!isDetails);
    setUserId(userid);
    getUser(userId).then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({
        type: actionType.SET_USER,
        userinfo: data,
      });})
  };

  const payment = info.education.loanRepayment;

  const [payments, setpayments] = useState(payment);

  // const newdate = new Date(date);
  // var current_time =
  // newdate.getHours() + ":" + newdate.getMinutes() + ":" + newdate.getSeconds();
  // console.log('date',current_time);

  // const checkDetails = (id)=>{
  //   const me = usersinfo.filter(x=> x.id === id)
  //   console.log("me",me)
  //   console.log("id",id)
  //  if (id === "1") {
  //   setIsDetails(true);
  //  }

  // }

  return (
    <div
      className="relative w-full rounded-md flex items-center justify-between py-4 bg-lightOverlay cursor-pointer hover:bg-card hover:shadow-md"
      key={keys}
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
        <p
          className={`rounded-full w-24 m-2 p-2 opacity-80 
      ${payments > 300 && "bg-active"} 
      ${payments >= 100 && payments <= 200 && "bg-inactive"} 
      ${payments <= 100 && "bg-blacklist"} 
      ${payments >= 200 && payments <= 300 && "bg-pending"} `}
        >
          {payments > 300
            ? "Active"
            : payments <= 100
            ? "Blacklisted"
            : payments >= 200 && payments <= 300
            ? "Pending"
            : payments >= 100 && payments <= 200
            ? "Inactive"
            : ""}
        </p>
      </div>
      <div
        className="absolute right-4 w-8 h-8 rounded-md flex items-center justify-center bg-gray-200"
        onClick={Details}
      >
        <div className="flex items-center">
          <BiDotsVerticalRounded />
        </div>
      </div>
      {det && (
        <div
          className="absolute justify-center   top-0 right-4 p-3 flex items-center flex-col gap-2 bg-white shadow-xl rounded-md"
          onClick={() => {
            setdet(false);
          }}
          key={keys}
          ref={ref}
        >
          {console.log(info.id)}
          <NavLink to={"/dashboard/profile"}>
            <p
              className="flex items-center justify-center text-textColor font-semibold gap-3"
              onClick={() => {
                updateDetails(info.id);
              }}
            >
             <AiOutlineEyeInvisible/> <span>View Details</span> 
            </p>
          </NavLink>
          <p
            className="flex items-center justify-center text-textColor font-semibold gap-3"
            onClick={() => {
              setdet(false);
            }}
          >
           <FaUserTimes/> <span>Blacklist User</span> 
          </p>
          
            <p
              className="flex items-center justify-center text-textColor font-semibold gap-3"
              onClick={() => {
                activateUser(info.id);
              }}
            >
              <FaUserCheck/> <span>Activate User</span>
            </p>
          
        </div>
      )}
    </div>
  );
};

export default Usercard;
