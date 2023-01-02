import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Pages';
import {Dashboard} from './Pages'

const App: React.FC = () => {
  return (
    <div className="w-screen h-auto ">
    
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard/*" element={<Dashboard/>} />
          </Routes>
      
    </div>
  );
}

export default App;
