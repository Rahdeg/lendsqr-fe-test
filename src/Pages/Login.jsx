import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllUsers } from '../Api/Apicalls';
import { Icon } from '../components'
import { useStateValue } from '../context/contexts/contextProvider';
import { actionType } from '../context/contexts/reducer';
import IMG1 from '../Images/pablo-sign-in 1.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [{ usersinfo }, dispatch] = useStateValue();

    const showPass = () =>{
        let passwordInput = document.getElementById("password")
        if(passwordInput.type === 'password'){
            passwordInput.type = 'text'
        }else {
            passwordInput.type = 'password'
        }
    }
const login = async (e)=>{
    e.preventDefault()
   await getAllUsers().then((data) => {
        localStorage.setItem("users", JSON.stringify(data));
        dispatch({
          type: actionType.SET_USERS,
          usersinfo: data,
        });
      });
      const userExit = usersinfo?.filter(x=> x.email === email);
      console.log("data",userExit[0]);
   if (userExit.length) {
    localStorage.setItem("user", JSON.stringify(userExit[0]));
      dispatch({
        type: actionType.SET_USER,
        userinfo: userExit[0],
      });
    navigate('/dashboard',{replace:true});
   } else {
        alert('Invalid Details');
        navigate('/',{replace:true});
   } 
}

  return (
    <div className='w-screen h-auto flex flex-col md:flex-row  items-center justify-center '>
      <div className='w-full flex flex-col mx-3 gap-2'> 
        <Icon/> 
      <img src={IMG1} alt='tt' className=' mt-16'/>
      </div>
      <section className="bg-white dark:bg-gray-900 w-full ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg  outline-noneshadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className=" text-3xl font-bold leading-tight tracking-tight text-XtextColor md:text-2xl dark:text-white">
                  Welcome!
                  <p className=' text-sm text-primary'>Enter details to login</p>
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email <span className='m-2'> is Cristian_Schmeler70@yahoo.com</span></label>
                      <input type="email" name="email" id="email" value={email} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password <span className='m-2'>is Password</span></label>
                      <div className='flex flex-row items-center justify-between bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                      <input type="password" name="password" id="password" placeholder="password" className="  sm:text-sm  focus:ring-primary-600 block w-full outline-none dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                      <span className='rounded-lg text-lighttext cursor-pointer' onClick={()=>showPass()}>SHOW</span>
                      </div>
                      
                      
                  </div>
                  <div className="flex items-center justify-between mt-10">
                      <div className="flex items-start">
                      <a href="#n" className="text-sm font-medium text-lighttext hover:underline dark:text-primary-500">FORGOT PASSWORD?</a>
                      </div>
                      
                  </div>
                  <button type="submit" className="w-full  text-white bg-lighttext hover:bg-lighttext focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={(e)=>{login(e)}}>LOG IN</button>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Login