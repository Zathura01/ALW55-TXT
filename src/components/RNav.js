import React, { createContext, use, useContext, useEffect, useState } from "react";
import './Style.css';


function RNav({setDarkMode, showPopNav}) {

  const handleDarkMode=(val)=>{
   setDarkMode(val);
  }
  
  return (
    <>
      <div className="navbar">
      <button variant="light" onClick={()=>{handleDarkMode(true) }} >Dark</button>
      <button variant="dark" onClick={()=>{handleDarkMode(false) }}>Light</button>
      <button variant="info" className='navPop' onClick={()=>{showPopNav(true)}}>Navbar</button>
      </div>
    </>  
  );
}

export default RNav;