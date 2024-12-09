import React from "react";
import { useNavigate } from "react-router-dom";

function PopupNav({ setPage, logStatus, showPopNav }) {
    const navigate = useNavigate();


  return (
    <div className="stylePopNavList">
      {logStatus ? (
        <>
          <h1
            onClick={() => {
                navigate('/Txt');
              setPage("Leetcode10");
              setTimeout(() => {
                showPopNav(false);
              }, 2000);
            }}
          >
            LC10
          </h1>
          <h1
            onClick={() => {
                navigate('/Txt');
              setPage("Leetcode11");
              setTimeout(() => {
                showPopNav(false);
              }, 2000);
            }}
          >
            LC11
          </h1>
          <h1
            onClick={() => {
                navigate('/Txt');
              setPage("Leetcode12");
              setTimeout(() => {
                showPopNav(false);
              }, 2000);
            }}
          >
            LC12
          </h1>
          <h1
            onClick={() => {
                navigate('/Txt');
              setPage("Logout");
              setTimeout(() => {
                showPopNav(false);
              }, 2000);
            }}
          >
            Logout
          </h1>
          <h1
            onClick={() => {
                navigate('/Home');
              setPage("Home");
              setTimeout(() => {
                showPopNav(false);
              }, 2000);
            }}
          >
            Home
          </h1>
        </>
      ) : (
        <>
          <h1
            onClick={() => {
              navigate('/Login')  
              setPage("Login");
              setTimeout(() => {
                showPopNav(false);
              }, 2000);
            }}
          >
            Login
          </h1>
          <h1
            onClick={() => {
              navigate('/Signup')  
              setPage("Signup");
              setTimeout(() => {
                showPopNav(false);
              }, 2000);
            }}
          >
            Signup
          </h1>
        </>
      )}
    </div>
  );
}

export default PopupNav;
