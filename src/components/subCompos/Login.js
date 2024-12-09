import React, { useState } from 'react'
import './formStyle.css'
import { useNavigate } from 'react-router-dom'


function Login({setPage}) {
  const [loginCreds, setLoginCreds] = useState({"userName":"","password":""})
  const navigate = useNavigate();
  const handleChange=(e)=>{
    const {name, value} = e.target;
    setLoginCreds({...loginCreds,[name]:value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();

    const formData = {
       username:loginCreds.userName,
       password:loginCreds.password
    }

    const response = await fetch('http://localhost:8000/loginUser',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    const data = await response.json()
    if(data.ok){
        console.log(data.message)
        localStorage.setItem("token",data.token)
        localStorage.setItem('status',true)
        setTimeout(() => {
            navigate("/Home")
        }, 1000);
    }
    else{
        console.log(data.message)
    }
  }


  return (
    <>
    <form className='form' onSubmit={handleSubmit}>
        <input 
        type='text'
        value={loginCreds.userName}
        onChange={handleChange}
        name='userName'
        placeholder='Enter your username or email' />
         <input 
        type='password'
        value={loginCreds.password}
        onChange={handleChange}
        name='password'
        placeholder='Enter your password' />
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Login