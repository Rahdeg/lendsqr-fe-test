import React from 'react'
import {MdOutlineArrowBackIosNew,MdArrowForwardIos} from 'react-icons/md'
import { useStateContext } from '../context/ContextProvider';

const Pagination = ({totalPosts,pagenate}) => {
    const { postPerPage,}= useStateContext();

const pageNumber = [];

for (let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){
    pageNumber.push(i);
}

  return (    
   
<nav aria-label="Page navigation example">
<ul class="inline-flex -space-x-px items-center justify-center">
<li className=' '>
<a href="#n" class=" flex items-center justify-center  h-full px-3 py-2 ml-0 leading-tight text-gray-500 bg-arrBg  border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
<MdOutlineArrowBackIosNew/>
</a>
</li>

{
    pageNumber && pageNumber.map(number => (
       
    <li key={number}>
      <a href="#n" onClick={()=>{pagenate(number)}} class="px-3 py-2 leading-tight text-gray-500 border  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{number}</a>
    </li>
    
    ))
}
<li>
      <a href="#c" class=" flex items-center justify-center px-3 py-2 leading-tight text-gray-500 bg-arrBg border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> <MdArrowForwardIos className=''/></a>
     
    </li>
    </ul>
  

</nav>

  )
}

export default Pagination