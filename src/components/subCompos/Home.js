import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Canvas from './Canvas';

function Home() {

   const [project, setProject ] = useState({name:"",description:"",file:[]})
   
   const handleChange=()=>{

   }

   const handleSubmit=()=>{

   }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <input
    name='projectname'
    type='text'
    value={project.name}
    onChange={handleChange}/>
    <textarea
    name='projectdescription'
    value={project.description}
    onChange={handleChange}/>
    <input 
    name='projectimage'
    type='file' />
    
    </form>
    <Canvas/>
    </>
  )
}

export default Home