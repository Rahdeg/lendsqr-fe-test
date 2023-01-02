import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import {ContextProvider} from './context/ContextProvider';
import {StateProvider} from './context/contexts/contextProvider';
import {initialState} from './context/contexts/initialState';
import reducer from './context/contexts/reducer';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    
    <StateProvider initialState={initialState} reducer={reducer}>
    <ContextProvider>
    <App />
    </ContextProvider>
    </StateProvider>
 
  </Router>
  
);

