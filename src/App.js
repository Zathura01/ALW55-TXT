import React, { createContext, useState, useEffect } from "react";
import RNav from "./components/RNav";
import Txt from "./components/Txt";
import PopupNav from "./components/PopupNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/subCompos/Home";
import Firstscreen from "./components/Firstscreen";
import Signup from "./components/subCompos/Signup";
import Login from "./components/subCompos/Login";



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [popupNav, showPopNav] = useState(false);
  const [page, setPage] = useState('');
  const [logStatus, setLogStatus] = useState(false);


  useEffect(() => {
    const tokenStat = localStorage.getItem('status')
    if (tokenStat === "true") {
      setLogStatus(true);
    } else if (tokenStat === "false") {
      setLogStatus(false);
    }
    

  }, [popupNav])
  

  return (
    
    <Router> 

      <div
        className="bodyDiv"
        style={{
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
          width:"100vw",
          height:"100vh"
        }}
      >
        {/* Main content */}
        <RNav setDarkMode={setDarkMode} showPopNav={showPopNav} />
      
      


        <Routes>
          <Route path="/" element={<Firstscreen />} />
          <Route path="/Txt" element={<Txt page={page} setPage={setPage}/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
   </div>



      {/* Popup navigation */}
      {popupNav && (
        <div
          id="popupNav"
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            zIndex: "1000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PopupNav setPage={setPage} logStatus={logStatus} showPopNav={showPopNav}/>
          <button
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              padding: "10px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => showPopNav(false)} // Close popup
          >
            Close
          </button>
        </div>
      )}

    </Router>
    
  );
}

export default App;
