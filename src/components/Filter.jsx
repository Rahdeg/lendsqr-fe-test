import React, { useState } from 'react'
import { useStateContext } from '../context/ContextProvider';
import { useStateValue } from '../context/contexts/contextProvider';


const Filter = ({setsearchfield}) => {
  const [{usersinfo}, dispatch] = useStateValue();
  const [org, setOrg] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const {
    setIsFilter, 
  } = useStateContext();

  const onReset =()=>{

    clearData();
    setsearchfield('')
    setIsFilter(false);
  }

  const onFilter =()=>{
    try {
      if (!name || !phone  || !date || !email ) {
        setTimeout(() => {
          alert("fill all details")
        }, 1000);
      } else {
       
        setsearchfield(name)
        clearData();
        setIsFilter(false);
        
      }
    } catch (error) {
     console.log(error)
      
    } 
  }
  const clearData = () => {
    setName("");
    setPhone("");
    setDate("");
    setEmail("");
    setOrg("");
  };

  return  (
    <div class=" absolute top-24 left-4 p-4 flex items-center flex-col gap-3 bg-white shadow-xl rounded-md w-full max-w-xs ">
  <form class=" ">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Organistaion
      </label>
      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
  <option selected>Select</option>
  {
    usersinfo.map((orgs,idx)=>(
      <option value={org} key={idx} onChange={(e) => {
        setOrg(e.target.value);
      }} >{orgs.orgName}</option>
    ))
  }
</select>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="user" value={name} onChange={(e) => {
        setName(e.target.value);
      }}/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Email
      </label>
      <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Emaill" value={email}
      onChange={(e) => {
        setEmail(e.target.value);
      }}/>

    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Date
      </label>
      <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" placeholder="Date" value={date}
      onChange={(e) => {
        setDate(e.target.value);
      }}/>
     
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Phone Number
      </label>
      <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="number" type="phone" placeholder="phone Number" value={phone}
      onChange={(e) => {
        setPhone(e.target.value);
      }}/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Status
      </label>
      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
  <option selected>Select</option>
  <option value="active">Active</option>
  <option value="Inactive">Inactive</option>
  <option value="Blacklisted">Blacklisted</option>
</select>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-gray-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onReset}>
        Reset
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onFilter}>
        Filter
      </button>
    </div>
  </form>
</div>
  )
}

export default Filter