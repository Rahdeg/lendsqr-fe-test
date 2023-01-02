import React from 'react'

const Search = () => {
  return (
    <div className='flex md:w-full w-[250px] h-10 md:h-full outline outline-outline rounded-md items-center justify-between gap-5'>
    <input type='text' placeholder='search for anything' className=' ml-2 outline-none w-full '/>
    <button className=' bg-btnBg rounded-r-md  p-2 text-white text-sm w-20 h-10  md:h-full flex items-center justify-center'>
    <svg aria-hidden="true" className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </button>
    </div>
  )
}

export default Search