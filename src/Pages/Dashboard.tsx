import { Route, Routes } from 'react-router-dom';
import {Header,Filter} from '../components'
import Sidebar from '../Container/Sidebar';
import {Users} from '../Container'
import Profile from './Profile';
import { fetchUser } from '../Api/fetchlocal';

const Dashboard = () => {

  fetchUser();
  
  return (
    <div className='flex flex-col md:flex-row '>
      <Header/>
      <div className=' w-80'>
      <Sidebar/>
      </div>
      <div className="my-4 w-full p-4 ">
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/filter" element={<Filter setsearchfield />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard