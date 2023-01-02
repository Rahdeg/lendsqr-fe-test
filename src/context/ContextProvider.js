import React,{createContext,useState,useContext} from 'react';
const StateContext=createContext();
const initialState={
    notification:false,
    userprofile:false,
}

export const ContextProvider = ({children})=>{
const [isClicked, setIsClicked] = useState(initialState);
const [activeMenu, setActiveMenu] = useState(true);
const [isMenu, setIsMenu] = useState(false);
const [isDetails, setIsDetails] = useState(false);
const [screenSize, setScreenSize] = useState(undefined);
const [currentColor, setcurrentColor] = useState('#03C9D7');
const [currentmode, setcurrentmode] = useState('Light');
const [themesettings, setthemesettings] = useState(false)

const handleClick=(clicked)=>{
    setIsClicked({...initialState, [clicked]: true});
}

const setMode =(e)=>{
    setcurrentmode(e.target.value);
    localStorage.setItem('thememode', e.target.value)
    setthemesettings(false);
}

const setColor =(color)=>{
   setcurrentColor(color);
    localStorage.setItem('colormode',color)
    setthemesettings(false);
}

    return(
        <StateContext.Provider value={{activeMenu,currentColor,currentmode,setcurrentColor,setcurrentmode,setMode, setColor,
            setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize ,themesettings, setthemesettings,isMenu,setIsMenu,isDetails, setIsDetails}}>
        {children}
        </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext)