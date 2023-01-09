import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Pages';
import {Dashboard,Protected} from './Pages'

const App: React.FC = () => {
  return (
    <div className="w-screen h-auto ">
    
          <Routes>
            <Route path="/" element={<Login/>} />

            <Route element={<Protected/>}>
            <Route path="/dashboard/*" element={<Dashboard/>} />
            </Route>
            
          </Routes>
      
    </div>
  );
}

export default App;
