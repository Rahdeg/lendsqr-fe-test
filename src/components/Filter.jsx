import React from 'react'
import { useStateValue } from '../context/contexts/contextProvider';


const Filter = () => {
  const [{usersinfo}, dispatch] = useStateValue();



  return  (
    <div class=" absolute top-24 left-4 p-4 flex items-center flex-col gap-3 bg-white shadow-xl rounded-md w-full max-w-xs ">
  <form class=" ">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Organistaion
      </label>
      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Select</option>
  {
    usersinfo.map((orgs,idx)=>(
      <option value={idx} key={idx}>{orgs.orgName}</option>
    ))
  }
</select>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="user"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Email
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Emaill"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Date
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" placeholder="Date"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Phone Number
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="number" type="phone" placeholder="phone Number"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Status
      </label>
      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Select</option>
  <option value="active">Active</option>
  <option value="Inactive">Inactive</option>
  <option value="Blacklisted">Blacklisted</option>
</select>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-gray-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Reset
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Filter
      </button>
    </div>
  </form>
</div>
  )
}

export default Filter