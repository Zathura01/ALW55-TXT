import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Logout({setPage}) {
    const navigate = useNavigate();


    useEffect(()=>{
     setTimeout(() => {
        localStorage.removeItem("token")
        localStorage.setItem('status',false)
        navigate("/Login")
     }, 3000);
    },[navigate])

  return (
    <div>You are logging out</div>
  )
}

export default Logout